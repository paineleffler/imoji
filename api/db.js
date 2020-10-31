const mongoose = require('mongoose')
require('dotenv').config()
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })

mongoose.connection.on('open', () => console.log('connected to mongodb'))

mongoose.connection.on('error', () => console.log('error occurred with mongodb'))

mongoose.connection.on('disconnected', () => console.log('disconnected from mongodb'))