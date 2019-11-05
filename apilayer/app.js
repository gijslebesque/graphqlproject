const { ApolloServer } = require("apollo-server");
const MoviesAPI = require("./dataSources/movieApi");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesAPI()
    };
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
