const mongoose = require('mongoose')
const { Schema } = mongoose

const Message = new Schema({
  content: {
    type: String,
    required: true
  },
  // string for now until we add auth
  createdBy: {
    type: String,
    require: true
  }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
})

module.exports = mongoose.model('Message', Message)
