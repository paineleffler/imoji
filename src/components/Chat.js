import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import Header from './Header'
import Footer from './Footer'
import Messages from './Messages'
import { ALL_MESSAGES } from '../utils/queries'
import { NEW_MESSAGE } from '../utils/subscriptions'

const Screen = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function Chat() {
  const { subscribeToMore, ...result } = useQuery(ALL_MESSAGES)

  return (
    <Screen>
      <Header />
      <Messages
        {...result}
        subscribeToNewMessages={() =>
          subscribeToMore({
            document: NEW_MESSAGE,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev
              const newMessage = subscriptionData.data.newMessage
              return Object.assign({}, prev, {
                allMessages: [...prev.allMessages, newMessage]
              })
            }
          })
        }
      />
      <Footer />
    </Screen>
  )
}
