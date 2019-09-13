const membersResolver = require('./members');
const housesResolver = require('./houses');

module.exports = {
  Query: {
    ...membersResolver.Query,
    ...housesResolver.Query
  },
  Member: {
    ...membersResolver.Member
  },
  House: {
    ...housesResolver.House
  }
};