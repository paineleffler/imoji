import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Messages from './Messages'

const Screen = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function Chat() {
  return (
    <Screen>
      <Header />
      <Messages />
      <Footer />
    </Screen>
  )
}
