import { gql } from '@apollo/client'

export const NEW_MESSAGE = gql`
  subscription {
    newMessage {
      _id
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`