const MessageModel = require('../models/Message')

const Message = {
  Query: {
    allMessages (parent, args, context) {
      return MessageModel.find()
    }
  },
  Mutation: {
    addMessage (parent, { content, createdBy }, { pubsub }) {
      return MessageModel.create({ content, createdBy })
    }
  }
}

module.exports = Message