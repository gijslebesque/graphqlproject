module.exports = {
  Query: {
    movies: async (_source, { id }, { dataSources }) => {
      return dataSources.moviesAPI.getMovies();
    }
  },
  Mutation: {
    addMovie: async (_source, payload, { dataSources }) => {
      return dataSources.moviesAPI.newMovie(payload);
    }
  }
};
