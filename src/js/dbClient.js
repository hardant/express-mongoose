const mongoose = require('mongoose');
const URL = require('./config/const').MONGOOSE.URL;
const User = require('./models/User.model');

module.exports = {
  async connnect() {
    await mongoose.connect(URL, { useNewUrlParser: true });
  },
  async create(model, doc) {
    let entity = await mongoose.model(model).create(doc);
    return entity;
  },
  async update(model, condition, doc) {
    return await mongoose.model(model).update(condition, doc)
  }
}
