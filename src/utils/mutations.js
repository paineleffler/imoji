import { gql } from '@apollo/client'

export const ADD_MESSAGE = gql`
  mutation AddTodo($content: String!, $createdBy: String!) {
    addMessage(content: $content, createdBy: $createdBy) {
      _id
      content
      createdBy
      createdAt
      updatedAt
    }
  }
`;