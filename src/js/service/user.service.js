const Index = require('../utils/reponse.util').Index;
const USER = require('../config/const').MONGOOSE.MODELS.USER;
const dbClient = require('../dbClient');
module.exports = {
  async getUsers() {
    return new Index(8, []); 
  },

  async addUser(user) {
    return await dbClient.create(USER, user);
  }
}