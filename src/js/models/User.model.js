const mongoose = require('mongoose');
const USER = require('../config/const').MONGOOSE.MODELS.USER;
const Schema = mongoose.Schema;

const schema = new Schema({
  username: String,
  password: String
}, {
  timestamps: true
});

module.exports = mongoose.model(USER, schema);