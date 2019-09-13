const User = require('../../models/User');
const House = require('../../models/House');

module.exports = {
  Query: {
    members: async() => {
      const members = await User.find();
      return members;
    },
    member: async(parent, {id}) => {
      const member = await User.findById(id);
      return member;
    }
  },
  Member: {
    house: async(parent) => {
      const house = await House.findById(parent.house);
      return house;
    }
  }
}