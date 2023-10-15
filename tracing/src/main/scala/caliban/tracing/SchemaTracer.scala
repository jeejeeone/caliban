package caliban.tracing

import caliban.CalibanError
import caliban.GraphQLResponse
import caliban.InputValue
import caliban.InputValue.ObjectValue
import caliban.Value
import caliban.Value.FloatValue.FloatNumber
import caliban.Value.IntValue.IntNumber
import caliban.Value.StringValue
import caliban.execution.ExecutionRequest
import caliban.execution.Field
import caliban.parsing.adt.OperationType
import caliban.tools.stitching.RemoteQuery
import caliban.wrappers.Wrapper.ExecutionWrapper
import io.opentelemetry.api.trace.SpanKind
import zio.telemetry.opentelemetry.tracing.ErrorMapper
import zio.telemetry.opentelemetry.tracing.Tracing
import zio._

object SchemaTracer {
  val wrapper = new ExecutionWrapper[Tracing] {
    def wrap[R <: Tracing](
      f: ExecutionRequest => ZIO[R, Nothing, GraphQLResponse[CalibanError]]
    ): ExecutionRequest => ZIO[R, Nothing, GraphQLResponse[CalibanError]] =
      request => {
        val parentField = request.field.fields.head.name

        // skip introspection queries
        if (parentField == "__schema") f(request)
        else
          ZIO.serviceWithZIO[Tracing](tracer =>
            tracer.span[R, Nothing, GraphQLResponse[CalibanError]](
              spanName(request),
              SpanKind.INTERNAL
            ) {
              ZIO.foreach(attributes(request.field)) { case (k, v) =>
                tracer.setAttribute(k, v)
              } *> f(request)
            }
          )
      }
  }

  private def spanName(request: ExecutionRequest): String = {
    val operationTypeString = request.operationType match {
      case OperationType.Query        => "query"
      case OperationType.Mutation     => "mutation"
      case OperationType.Subscription => "subscription"
    }

    // The span name MUST be of the format <graphql.operation.type> <graphql.operation.name>
    // provided that graphql.operation.type and graphql.operation.name are available. If
    // graphql.operation.name is not available, the span SHOULD be named <graphql.operation.type>.
    // When <graphql.operation.type> is not available, GraphQL Operation MAY be used as span name.
    Seq(Some(operationTypeString), request.operationName).flatten.mkString(" ")
  }

  private def attributes[T, R](
    field: Field
  ) = List("document" -> graphQLQuery(field))

  private def graphQLQuery(field: Field): String =
    RemoteQuery.apply(maskField(field)).toGraphQLRequest.query.getOrElse("")

  private def maskArguments(args: Map[String, InputValue]): Map[String, InputValue] =
    args.map { case (k, v) =>
      val v1 = v match {
        case _: ObjectValue      => ObjectValue(Map.empty)
        case _: StringValue      => StringValue("")
        case _: Value.IntValue   => IntNumber(0)
        case _: Value.FloatValue => FloatNumber(0f)
        case x                   => x
      }
      (k, v1)
    }.toMap

  private def maskField(f: Field): Field =
    f.copy(
      arguments = maskArguments(f.arguments),
      fields = f.fields.map(maskField)
    )
}
