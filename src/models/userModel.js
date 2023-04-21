//=====================Importing Packages=====================//
const mongoose = require('mongoose')
//=====================Creating User's Schema=====================//
const userModel = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },


}, { timestamps: true });

//=====================Module Export=====================//
module.exports = mongoose.model('User', userModel)
