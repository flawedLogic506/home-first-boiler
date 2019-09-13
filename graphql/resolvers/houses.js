const User = require('../../models/User');
const House = require('../../models/House');
const mongoose = require('mongoose');

module.exports = {
  Query: {
    houses: async() => {
      const houses = await House.find();
      return houses;
    },
    house: async(parent, {id}) => {
      const house = await House.findById(id);
      return house;
    }
  },
  House: {
    members: async(parent) => {
      return []
    }
  }
}