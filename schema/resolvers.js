const UserList = require("../FakeData");

/**
 * Contains all resolvers functions in our API
 * All funs that calls to database or do anything will exist in this resolver
 */
const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

module.exports = { resolvers };
