import { gql } from '@apollo/client'

export const ALL_MESSAGES = gql`
  query ALLMessages {
    allMessages {
      _id
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`