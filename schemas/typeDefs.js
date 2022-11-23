const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    user1: String!
    user2: String!
    user1_books: Int
    user2_books: Int
  }

  type Query {
    book: [Book]
    collections(_id: String): [Collection]
  }

  type Mutation {
    createCollection(book1: String!, book2: String!): Collection
    createBook(_id: String!, bookNum: Int!): Collection
  }
`;

module.exports = typeDefs;
