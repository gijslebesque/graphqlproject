const { RESTDataSource } = require("apollo-datasource-rest");

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/";
  }

  async getMovies() {
    return this.get(`movies`);
  }
  async newMovie(payload) {
    return this.post(`movies`, payload);
  }
}

module.exports = MoviesAPI;
