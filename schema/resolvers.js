const { UserList } = require("../FakeData");
const _ = require("lodash");

/**
 * Contains all resolvers functions in our API
 * All funs that calls to database or do anything will exist in this resolver
 */
const resolvers = { 
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    }
  },
};

module.exports = { resolvers };
