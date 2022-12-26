const { UserList, MoviesList } = require("../FakeData");
const _ = require("lodash");

/**
 * Contains all resolvers funs in our API
 * All funs that calls to database or do anything will exist in this object
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

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      console.log(id, typeof(id));
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
  },
};

module.exports = { resolvers };
