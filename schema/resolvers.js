const { UserList, MoviesList } = require("../FakeData");
const _ = require("lodash");

/**
 * Contains all resolvers functions in our API
 * All funs that calls to database or do anything will exist in this resolver
 */
const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // MOVIE RESOLVERS
    movies: () => {
      return MoviesList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MoviesList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MoviesList,
        (movie) => movie.yearOfRelease >= 2008 && movie.yearOfRelease <= 2010
      );
    },
  },
};

module.exports = { resolvers };
