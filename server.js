const express = require('express')
const { createServer } = require('http')
const { ApolloServer } = require('apollo-server-express')
const { PubSub } = require('graphql-subscriptions')
const path = require('path')

const typeDefs = require('./api/types')
const resolvers = require('./api/resolvers')

require('dotenv').config()
require('./api/db')

const pubsub = new PubSub()
const API_PORT =  process.env.API_PORT || 4000
const cors = {
	origin: process.env.REACT_APP_UI_URL,
  credentials: true
}

const app = express()
const server = new ApolloServer({
  cors,
  typeDefs,
  resolvers,
  context: ({ req }) => { return { pubsub } } // add some auth here later. 🔒
})

server.applyMiddleware({ app })

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const httpServer = createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: API_PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${API_PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${API_PORT}${server.subscriptionsPath}`)
})
