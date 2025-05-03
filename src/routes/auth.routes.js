const express = require('express');
const passport = require('passport');
const router = express.Router();

const userService = require('../services/user.service');
const PasswordManager = require('../security/passManager');

router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    async (req, res, next) => {
      try {
        console.log('req.user', req.user);
        res.json({ user: req.user, logged: true });
      } catch (error) {
        next(error);
      }
    }
  );
  
  router.post('/register', async (req, res, next) => {
    try {
      const { email, password, ...otherData } = req.body;
      console.log('Registering user:', req.body);
      const existing = await userService.findOneByEmail(email);
      if (existing) {
        return res.status(409).json({ message: 'Email ya registrado' });
      }
  
      const hashedPassword = await PasswordManager.hashPassword(password);
  
      const newUser = await userService.create({
        email,
        password: hashedPassword,
        ...otherData
      });
  
      delete newUser.dataValues.password;
  
      res.status(201).json({ user: newUser });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;