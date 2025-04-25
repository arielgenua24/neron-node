//security/hasher.js

const bcrypt = require('bcrypt');

class hasher {
  static async hash(password) {
    const hashedPass = await bcrypt.hash(password, 10);
    return hashedPass;
  }
}

module.exports = hasher;
