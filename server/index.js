import { startApolloServer } from "./app.js";
import { resolvers } from "./graphql/resolvers.js";
import { typeDefs } from "./graphql/typeDefs.js";

startApolloServer(typeDefs, resolvers);