// src/routes/auth.routes.js
const express    = require('express');
const bcrypt     = require('bcrypt');
const passport   = require('../auth/passport');
const clientService = require('../services/client.service');
const PasswordManager = require('../security/passManager');

const router = express.Router();

// POST /auth/register
router.post('/register', async (req, res, next) => {
  try {
    const { email, password, ...otherData } = req.body;
    console.log('Registering user:', req.body);
    // 1) Comprobar si ya existe un usuario con ese email
    const existing = await clientService.findOneByEmail(email);
    if (existing) {
      return res.status(409).json({ message: 'Email ya registrado' });
    }

    // 2) Hashear la contraseña
    const hashedPassword = PasswordManager.hashPassword(password);

    // 3) Crear el usuario
    const newUser = await clientService.create({
      email,
      password: hashedPassword,
      ...otherData
    });

    // 4) Eliminar password antes de responder
    delete newUser.dataValues.password;

    // 5) Responder
    res.status(201).json({ user: newUser });
  } catch (err) {
    next(err);
  }
});

// POST /auth/login
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
