import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  backdrop-filter: blur(10px);
  background: rgba(242, 242, 247, 0.75);
  justify-content: center;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  color: black;
  margin: 1rem 0;
`

const Avatar = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: rgb(170,170,170);
  background: linear-gradient(0deg, rgba(170,170,170,1) 0%, rgba(209,209,209,1) 100%);
`

export default function Header() {
  return (
    <Container>
      <Title>
        <Avatar />
        <div>General</div>
      </Title>
    </Container>
  )
}
