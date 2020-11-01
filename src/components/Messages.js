import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: white;
  margin-bottom: 5rem;
`

const Message = styled.span`
  /* made these hardcoded to paine for now until auth */
  background: ${p => p.createdBy === 'paine' ? 'rgb(0, 122, 255)' : 'rgb(229, 229, 234)'};
  color: ${p => p.createdBy === 'paine' ? 'white' : 'black'};
  align-self: ${p => p.createdBy === 'paine' ? 'flex-end' : 'flex-start'};
  padding: 0.5rem;
  border-radius: 0.75rem;
  margin: 0.25rem 1rem;
  width: max-content;
  font-weight: 300;
  font-size: 1rem;
`

export default function Messages(props) {
  const { subscribeToNewMessages, data } = props
  useEffect(() => { 
    subscribeToNewMessages()
  }, [])
  return (
    <Container>
      { data && data.allMessages && data.allMessages.map(({ _id, content, createdBy, createdAt }) => {
          return <Message key={_id} createdBy={createdBy}>{content}</Message>
        }
      )}
    </Container>
  )
}
