class UserController {
  constructor() {
    this.users = [];
  }

  add(user) {
    this.users.push(user);
    return user;
  }

  remove(id) {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }

  findByEmail(email) {
    return this.users.find(u => u.email === email);
  }

  findById(id) {
    return this.users.find(u => u.id === id);
  }
}

module.exports = UserController;
