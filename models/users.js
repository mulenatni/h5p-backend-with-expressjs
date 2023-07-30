const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  usersRegistered: {
    type: String,
    required: true
  },
  userDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Users', usersSchema)