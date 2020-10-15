(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{360:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"graphql-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#graphql-client"}},[t._v("#")]),t._v(" GraphQL Client")]),t._v(" "),e("p",[e("strong",[t._v("Caliban-client")]),t._v(" is a module independent from Caliban that makes it possible to write GraphQL queries using Scala code in a type-safe and functional fashion. It is built on top of "),e("a",{attrs:{href:"https://github.com/softwaremill/sttp",target:"_blank",rel:"noopener noreferrer"}},[t._v("sttp"),e("OutboundLink")],1),t._v(", which means you can run requests using the backend of your choice.")]),t._v(" "),e("p",[t._v("Just like Caliban, "),e("code",[t._v("caliban-client")]),t._v(" offers a purely functional interface and keeps the boilerplate minimal. It works as follows:")]),t._v(" "),e("ol",[e("li",[t._v("Use the "),e("code",[t._v("caliban-codegen-sbt")]),t._v(" tool to generate boilerplate code from a given GraphQL schema")]),t._v(" "),e("li",[t._v("Write your GraphQL query/mutation by combining helpers from the generated code")]),t._v(" "),e("li",[t._v("Transform your query/mutation into an "),e("code",[t._v("sttp")]),t._v(" request and run it with your preferred backend")])]),t._v(" "),e("h2",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),e("p",[t._v("To use "),e("code",[t._v("caliban-client")]),t._v(", add the following line in your "),e("code",[t._v("build.sbt")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('libraryDependencies += "com.github.ghostdogpr" %% "caliban-client" % "0.9.2"\n')])])]),e("p",[t._v("Caliban-client is available for ScalaJS. To use it in a ScalaJS project, instead add this line to your "),e("code",[t._v("build.sbt")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('libraryDependencies += "com.github.ghostdogpr" %%% "caliban-client" % "0.9.2"\n')])])]),e("h2",{attrs:{id:"code-generation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[t._v("#")]),t._v(" Code generation")]),t._v(" "),e("p",[t._v("The first step for building GraphQL queries with "),e("code",[t._v("caliban-client")]),t._v(" is to generate boilerplate code from a GraphQL schema. For that, you need a file containing your schema (if your backend uses "),e("code",[t._v("caliban")]),t._v(", you can get it by calling "),e("code",[t._v("GraphQL#render")]),t._v(" on your API).")]),t._v(" "),e("p",[t._v("To use this feature, add the "),e("code",[t._v("caliban-codegen-sbt")]),t._v(" sbt plugin to your "),e("code",[t._v("project/plugins.sbt")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[t._v("addSbtPlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.github.ghostdogpr"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caliban-codegen-sbt"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.9.2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("And enable it in your "),e("code",[t._v("build.sbt")]),t._v(" file:")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[t._v("enablePlugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CodegenPlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Then call the "),e("code",[t._v("calibanGenClient")]),t._v(" sbt command.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[t._v("calibanGenClient schemaPath outputPath "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("scalafmtPath path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("headers name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name2"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ncalibanGenClient project"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphql src"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scala\n")])])]),e("p",[t._v("This command will generate a Scala file in "),e("code",[t._v("outputPath")]),t._v(" containing helper functions for all the types defined in the provided GraphQL schema defined at "),e("code",[t._v("schemaPath")]),t._v(".\nInstead of a file, you can provide a URL and the schema will be obtained using introspection.\nThe generated code will be formatted with Scalafmt using the configuration defined by "),e("code",[t._v("--scalafmtPath")]),t._v(" option (default: "),e("code",[t._v(".scalafmt.conf")]),t._v(").\nIf you provide a URL for "),e("code",[t._v("schemaPath")]),t._v(", you can provide request headers with "),e("code",[t._v("--headers")]),t._v(" option.\nThe package of the generated code is derived from the folder of "),e("code",[t._v("outputPath")]),t._v(".\nThis can be overridden by providing an alternative package with the "),e("code",[t._v("--packageName")]),t._v("\noption.")]),t._v(" "),e("h2",{attrs:{id:"query-building"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-building"}},[t._v("#")]),t._v(" Query building")]),t._v(" "),e("p",[t._v("Once the boilerplate code is generated, you can start building queries. For each "),e("em",[t._v("type")]),t._v(" in your schema, a corresponding Scala object has been created. For each "),e("em",[t._v("field")]),t._v(" in your schema, a corresponding Scala function has been created.")]),t._v(" "),e("p",[t._v("For example, given the following schema:")]),t._v(" "),e("div",{staticClass:"language-graphql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("nicknames")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("origin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Origin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Your generated code will have the following:")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" Character "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" nicknames"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" origin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("A "),e("code",[t._v("SelectionBuilder[Origin, A]")]),t._v(" is a selection from a parent type "),e("code",[t._v("Origin")]),t._v(" that returns a result of type "),e("code",[t._v("A")]),t._v(". In this example, "),e("code",[t._v("name")]),t._v(" is a selection from a "),e("code",[t._v("Character")]),t._v(" that returns a "),e("code",[t._v("String")]),t._v(".")]),t._v(" "),e("p",[t._v("You can combine multiple selections using the "),e("code",[t._v("~")]),t._v(" operator. The new result type will be a tuple from the 2 combined result types. Note that you can only combine selections that have the same origin.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" selection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nicknames\n")])])]),e("p",[t._v("If you combine multiple fields, it is more convenient to have a case class to represent your data (to avoid seeing nested tuples). You can use "),e("code",[t._v("mapN")]),t._v(" to map a nested tuple to a case class.")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nickname"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" origin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" character"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nicknames "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Fields that return an object type will require an inner selection, which is another "),e("code",[t._v("SelectionBuilder")]),t._v(". Let's consider the following "),e("code",[t._v("Query")]),t._v(" type.")]),t._v(" "),e("div",{staticClass:"language-graphql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("characters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When calling "),e("code",[t._v("characters")]),t._v(", we need to provide a "),e("code",[t._v("SelectionBuilder[Character, ?]")]),t._v(" to indicate which fields to select on the returned "),e("code",[t._v("Character")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" query"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RootQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  Query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("characters "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nicknames "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" Character"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Or if we reuse the "),e("code",[t._v("character")]),t._v(" selection we just created:")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" query"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RootQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  Query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("characters "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    character\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Because this is Scala code, you can easily reuse a selection in multiple places without having to worry about GraphQL fragments. The Scala compiler will also make sure that you only combine fields that make sense.")]),t._v(" "),e("p",[t._v("When a field requires an argument, the helper method for the field will require one as well. Let's enrich our query:")]),t._v(" "),e("div",{staticClass:"language-graphql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-graphql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("characters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("origin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Origin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Character"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("You now need to provide an "),e("code",[t._v("Origin")]),t._v(" when calling "),e("code",[t._v("characters")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" query"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SelectionBuilder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RootQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  Query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("characters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MARS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    character\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"request-execution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-execution"}},[t._v("#")]),t._v(" Request execution")]),t._v(" "),e("p",[t._v("Once your query or mutation is created, it is time to execute it. To do that, you can transform your "),e("code",[t._v("SelectionBuilder")]),t._v(" into an "),e("code",[t._v("sttp")]),t._v(" request by calling "),e("code",[t._v(".toRequest")]),t._v(". This function takes the URL of your GraphQL server and an optional boolean "),e("code",[t._v("useVariables")]),t._v(" that determines if arguments should be using variables or not (default: false).")]),t._v(" "),e("p",[t._v("You can then simply run the "),e("code",[t._v("sttp")]),t._v(" request with the backend of your choice. See the "),e("a",{attrs:{href:"https://sttp.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("sttp docs"),e("OutboundLink")],1),t._v(" if you are not familiar with it.")]),t._v(" "),e("p",[t._v("Here is an example using the "),e("code",[t._v("AsyncHttpClient")]),t._v(" backend for "),e("code",[t._v("ZIO")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-scala extra-class"},[e("pre",{pre:!0,attrs:{class:"language-scala"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sttp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sttp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asynchttpclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("AsyncHttpClientZioBackend\n\nAsyncHttpClientZioBackend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flatMap "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" backend "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" serverUrl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uri"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8088/api/graphql"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" result"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Task"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CharacterView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toRequest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serverUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("absolve\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("As a result, we get a ZIO "),e("code",[t._v("Task")]),t._v(" whose return type is the same as our "),e("code",[t._v("SelectionBuilder")]),t._v(". The sttp request does not only contain the request to send, but also takes care of parsing the response into the expected type.")]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"https://github.com/ghostdogpr/caliban/tree/master/examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),e("OutboundLink")],1),t._v(" project contains a runnable sample code that queries the example GraphQL backend.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Limitations")]),t._v(" "),e("p",[t._v("Only Queries and Mutations are supported. Subscriptions support will be added in the future.\nType extensions are not supported by the codegen tool.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);