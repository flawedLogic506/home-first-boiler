const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const gql = require('graphql-tag');
const db = require('./db');

const typeDefs = gql`

  type Query {
    firstQuery: String!
    members: [Member],
    member(id: ID!): Member
    houses: [House]
    house(id: ID!): House
  }

  type Member {
    id: ID!
    firstName: String,
    lastName: String
    house: House
  }

  type House {
    id: ID!,
    members: [Member],
    houseNumber: Int
  }

`;

const resolvers = {
  Query: {
    firstQuery: () => 'First query executed',
    members: () => db.users,
    member: (parent, {id}) => db.users.find(user => user.id === id),
    houses: () => db.houses,
    house: (parent, {houseNumber}) => db.houses.find(house => house.houseNumber === houseNumber)
  },
  Member: {
    house: parent => db.houses.find(house => parent.house === house.id)
  },
  House: {
    members: parent => {
      const house = db.users.filter(({id}) => parent.members.includes(id));
      return house;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
  // context: ({req}) => ({req})
});

// mongoose.connect('mongodb://localhost:27017/home', {useNewUrlParser: true})
//   .then(() => {
//     console.log('Connected to MongoDB');
//     return server.listen({port: 5000})
//       .then(res => console.log(res))
//   })

server.listen()
  .then(({url}) => console.log(`Server running at ${url}`));