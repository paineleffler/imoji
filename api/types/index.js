const { gql } = require('apollo-server-express')

const Message = require('./Message')

/*
  Every query/mutation/subscriiption is an extension off of the base types which are empty.
  This allows me to split the schema by relative types.
*/

const types = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
  ${Message}
`

module.exports = types
