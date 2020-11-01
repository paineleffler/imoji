import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { ALL_MESSAGES } from '../utils/queries'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: white;
`

const Message = styled.span`
  background: rgb(229, 229, 234);
  padding: 0.5rem;
  border-radius: 0.75rem;
  margin: 0.25rem 1rem;
  width: max-content;
  font-weight: 300;
  font-size: 1rem;
`

export default function Messages() {
  const { data } = useQuery(ALL_MESSAGES)
  return (
    <Container>
      { data && data.allMessages && data.allMessages.map(({ _id, content, createdBy, createdAt }) => {
          return <Message key={_id}>{content}</Message>
        }
      )}
    </Container>
  )
}
