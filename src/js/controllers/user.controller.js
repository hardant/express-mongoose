const userService = require('../service/user.service');

module.exports = {
  async getUsers(req, res) {
    let result = await userService.getUsers();
    res.json(result);
  },
  async addUser(req, res) {
    let result = await userService.addUser({username: 'Brandon', password: '123456'});
    res.json(result);
  }
}