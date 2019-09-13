const {gql} = require('apollo-server');

module.exports = gql`

  type Query {
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