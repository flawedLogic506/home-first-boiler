const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const gql = require('graphql-tag');

const {MONGODB} = require('./config');
const houses = require('./db/houses');

const typeDefs = gql`
  
  type User {
    id: ID!,
    firstName: String!,
    lastName: String!,
    age: Int
  }

  type House {
    id: ID!,
    members: [User!]!
  }

  type Query {
    getHouses: [House]!
  }
`;

const resolvers = {
  Query: {
    getHouses: () => houses
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req})
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to MongoDB');
    return server.listen({port: 5000})
      .then(res => {
        console.log(`Server running at port ${res.url}`)
      })
  })
