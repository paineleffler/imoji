const { gql } = require('apollo-server-express')

const Message = gql`
  scalar Date
  type Message {
    _id: ID
    content: String!
    createdBy: String!
    createdAt: Date!
    updatedAt: Date!
  }
  extend type Query {
    allMessages: [Message]
  }
  extend type Mutation {
    addMessage(content: String!, createdBy: String!): Message
  }
  extend type Subscription {
    newMessage: Message
  }
`

module.exports = Message
