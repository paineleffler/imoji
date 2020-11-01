import { split, HttpLink, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL
})

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SOCKET_URL,
  options: {
    reconnect: true
  }
})

// join the socket link and regular link
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

export default function Apollo({ children }) {
  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  )
}
