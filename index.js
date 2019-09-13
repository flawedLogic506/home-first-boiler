const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// const resolvers = {
//   Query: {
//     members: async() => {
//       const members = await User.find();
//       return members;
//     },
//     member: async(parent, {id}) => {
//       const user = await User.findById({id});
//       if(user) return user;
//       else throw new Error('User not found!');
//     },
//     houses: async() => {
//       const houses = await House.find();
//       return houses;
//     },
//     house: (parent, {num}) => db.houses.find(house => house.houseNumber === num)
//   }
//   Member: {
//     house: async(parent) => {
//       db.houses.find(house => parent.house === house.id)
//       const house = House.findById()
//     }
//   },
//   House: {
//     members: parent => {
//       const house = db.users.filter(({id}) => parent.members.includes(id));
//       return house;
//     }
//   }
// }

const server = new ApolloServer({
  typeDefs,
  resolvers
  // context: ({req}) => ({req})
});

mongoose.connect('mongodb://localhost:27017/home', {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to MongoDB');
    return server.listen({port: 5000})
      .then(res => console.log(`Server running at port ${res.port}`))
  })

// server.listen()
//   .then(({url}) => console.log(`Server running at ${url}`));