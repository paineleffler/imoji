import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { ADD_MESSAGE } from '../utils/mutations'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: rgba(242, 242, 247, 0.75);
  backdrop-filter: blur(10px);
  form {
    margin: 1rem;
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
    addMessage({ variables: { content: newMessage, createdBy: 'paine' }})
    setNewMessage('')
  }
  return (
    <Container>
      <form onSubmit={sendMessage}>
        <StyledInput placeholder="iMoji" value={newMessage} onChange={(e) => { setNewMessage(e.target.value) }} />
      </form>
    </Container>
  )
}
