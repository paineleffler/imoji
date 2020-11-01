import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { ADD_MESSAGE } from '../utils/mutations'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  form {
    width: 100%;
  }
`

const StyledInput = styled.input`
  width: 100%;
  font-size: .75rem;
  border: 0.5px solid rgb(174, 174, 178);
  border-radius: 1rem;
  outline: none;
  padding: 0.5rem 0.5rem;
  ::placeholder {
    color: rgb(199, 199, 204);
  }
`

export default function Footer() {
  const [addMessage, { data }] = useMutation(ADD_MESSAGE)
  const [newMessage, setNewMessage] = useState('')
  function sendMessage(e) {
    e.preventDefault()
    addMessage({ variables: { content: newMessage, createdBy: 'Paine' }})
  }
  return (
    <Container>
      <form onSubmit={sendMessage}>
        <StyledInput placeholder="iMoji" value={newMessage} onChange={(e) => { setNewMessage(e.target.value) }} />
      </form>
    </Container>
  )
}
