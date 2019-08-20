const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    firstQuery: String!
  }
`;

const resolvers = {
  Query: {
    firstQuery: () => 'First query executed'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req})
});

mongoose.connect('mongodb://localhost:27017/home', {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to MongoDB');
    return server.listen({port: 5000})
      .then(res => console.log(res))
  })
