const MessageModel = require('../models/Message')

// one chatroom for now
const General = 'GENERAL'

const Message = {
  Query: {
    allMessages (parent, args, context) {
      return MessageModel.find()
    }
  },
  Mutation: {
    async addMessage (parent, { content, createdBy }, { pubsub }) {
      const newMessage = await MessageModel.create({ content, createdBy })
      const { _id, createdAt, updatedAt } = newMessage
      await pubsub.publish(General, { newMessage: { _id, content, createdBy, createdAt, updatedAt }})
      return newMessage
    }
  },
  Subscription: {
    newMessage: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator(General)
    }
  }
}

module.exports = Message