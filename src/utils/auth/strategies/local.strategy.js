// src/auth/strategies/local.strategy.js
const boom       = require('@hapi/boom');
const { Strategy } = require('passport-local');
const userService = require('../../../services/user.service');
const PasswordManager = require('../../../security/passManager');

module.exports = new Strategy(
  {
    usernameField: 'email',    // el campo que llega en el body
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      // 1) Buscamos al usuario por email
      const user = await userService.findOneByEmail(email);
      if (!user) {
        return done(boom.unauthorized('Usuario no encontrado'), false);
      }

      // 2) Comparamos la contraseña plana con la hasheada
      const isMatch = PasswordManager.verifyPassword(
        password,
        user.password
      );
      if (!isMatch) {
        return done(boom.unauthorized('Contraseña incorrecta'), false);
      }

      // 3) Eliminamos la contraseña antes de devolver el user
      delete user.dataValues.password;

      // 4) Autenticación exitosa
      return done(null, user);

    } catch (err) {
      // Error genérico en la autenticación
      return done(err, false);
    }
  }
);
