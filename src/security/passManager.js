// security/passwordManager.js

const Verifier = require('./verifier');
const Hasher = require('./hasher');

class PasswordManager {
  static async hashPassword(password) {
    const passHashed = await Hasher.hash(password);
    return passHashed;
  }

  static async verifyPassword(password, encryptedPass) {
    const isMatched = await Verifier.verify(password, encryptedPass);
    return isMatched;
  }
}

//esta funcion anonima debe ser asincrona para poder esparar a que se me retorna la promesa //igual, esta funcion es una mero test...
(async () => {
  const hashedPass = await PasswordManager.hashPassword('hola');
  console.log(hashedPass);

  const isMatched = await PasswordManager.verifyPassword('hola', hashedPass);
  console.log(isMatched); //debe retornar true
})();

module.exports = PasswordManager;
