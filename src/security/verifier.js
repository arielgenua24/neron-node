// security/verifier.js

const bcrypt = require('bcrypt');

class Verifier {
  static async verify(password, encryptedPass) {
    const isMatched = await bcrypt.compare(password, encryptedPass);
    return isMatched;
  }
}

module.exports = Verifier;
