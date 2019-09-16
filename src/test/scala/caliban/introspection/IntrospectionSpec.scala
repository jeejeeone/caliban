package caliban.introspection

import caliban.GraphQL._
import caliban.TestUtils._
import zio.Task
import zio.test.Assertion._
import zio.test._

object IntrospectionSpec
    extends DefaultRunnableSpec(
      suite("IntrospectionSpec")(
        testM("introspect schema") {
          val fullIntrospectionQuery = """
              query IntrospectionQuery {
                __schema {
                  queryType { name }
                  mutationType { name }
                  subscriptionType { name }
                  types {
                    ...FullType
                  }
                  directives {
                    name
                    description
                    locations
                    args {
                      ...InputValue
                    }
                  }
                }
              }

              fragment FullType on __Type {
                kind
                name
                description
                fields(includeDeprecated: true) {
                  name
                  description
                  args {
                    ...InputValue
                  }
                  type {
                    ...TypeRef
                  }
                  isDeprecated
                  deprecationReason
                }
                inputFields {
                  ...InputValue
                }
                interfaces {
                  ...TypeRef
                }
                enumValues(includeDeprecated: true) {
                  name
                  description
                  isDeprecated
                  deprecationReason
                }
                possibleTypes {
                  ...TypeRef
                }
              }

              fragment InputValue on __InputValue {
                name
                description
                type { ...TypeRef }
                defaultValue
              }

              fragment TypeRef on __Type {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                        ofType {
                          kind
                          name
                          ofType {
                            kind
                            name
                            ofType {
                              kind
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
                """

          val io = Task.runtime.map { implicit rts =>
            graphQL(resolverIO)
          }.flatMap(schema => schema.execute(fullIntrospectionQuery).map(_.toString).run)

          assertM(
            io,
            succeeds(
              equalTo(
                """{"__schema":{"queryType":{"name":"QueryIO"},"mutationType":null,"subscriptionType":null,"types":[{"kind":"OBJECT","name":"BELT","description":null,"fields":[],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"OBJECT","name":"Captain","description":null,"fields":[{"name":"shipName","description":null,"args":[],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"SCALAR","name":"String","ofType":null}},"isDeprecated":false,"deprecationReason":null}],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"OBJECT","name":"Character","description":null,"fields":[{"name":"name","description":null,"args":[],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"SCALAR","name":"String","ofType":null}},"isDeprecated":false,"deprecationReason":null},{"name":"nicknames","description":null,"args":[],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"LIST","name":null,"ofType":{"kind":"SCALAR","name":"String","ofType":null}}},"isDeprecated":false,"deprecationReason":null},{"name":"origin","description":null,"args":[],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"UNION","name":"Origin","ofType":null}},"isDeprecated":false,"deprecationReason":null},{"name":"role","description":null,"args":[],"type":{"kind":"UNION","name":"Role","ofType":null},"isDeprecated":false,"deprecationReason":null}],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"OBJECT","name":"EARTH","description":null,"fields":[],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"OBJECT","name":"Engineer","description":null,"fields":[{"name":"shipName","description":null,"args":[],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"SCALAR","name":"String","ofType":null}},"isDeprecated":false,"deprecationReason":null}],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"OBJECT","name":"MARS","description":null,"fields":[],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"OBJECT","name":"Mechanic","description":null,"fields":[{"name":"shipName","description":null,"args":[],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"SCALAR","name":"String","ofType":null}},"isDeprecated":false,"deprecationReason":null}],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"UNION","name":"Origin","description":null,"fields":null,"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":[{"kind":"OBJECT","name":"BELT","ofType":null},{"kind":"OBJECT","name":"EARTH","ofType":null},{"kind":"OBJECT","name":"MARS","ofType":null}]},{"kind":"OBJECT","name":"Pilot","description":null,"fields":[{"name":"shipName","description":null,"args":[],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"SCALAR","name":"String","ofType":null}},"isDeprecated":false,"deprecationReason":null}],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"OBJECT","name":"QueryIO","description":"Queries","fields":[{"name":"characters","description":"Return all characters from a given origin","args":[{"name":"origin","description":null,"type":{"kind":"ENUM","name":"Origin","ofType":null},"defaultValue":null}],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"LIST","name":null,"ofType":{"kind":"OBJECT","name":"Character","ofType":null}}},"isDeprecated":false,"deprecationReason":null},{"name":"character","description":null,"args":[{"name":"name","description":null,"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"SCALAR","name":"String","ofType":null}},"defaultValue":null}],"type":{"kind":"NON_NULL","name":null,"ofType":{"kind":"OBJECT","name":"Character","ofType":null}},"isDeprecated":true,"deprecationReason":"Use `characters`"}],"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":null},{"kind":"UNION","name":"Role","description":null,"fields":null,"inputFields":null,"interfaces":null,"enumValues":null,"possibleTypes":[{"kind":"OBJECT","name":"Captain","ofType":null},{"kind":"OBJECT","name":"Engineer","ofType":null},{"kind":"OBJECT","name":"Mechanic","ofType":null},{"kind":"OBJECT","name":"Pilot","ofType":null}]}],"directives":[]}}"""
              )
            )
          )
        }
      )
    )
