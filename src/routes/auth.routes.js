const express = require('express');
const passport = require('passport');
const router = express.Router();


router.post(
    '/login',
    passport.authenticate('local', { session: false }), //llamamos al middleware passport que ya esta eschcuhamdo, le decimos que la estrategia es local, por lo tanto, en estos momentos toda la data que envie el usuairo se la estamos enviando a passport-local
    async (req, res, next) => {
      try {
        console.log('req.user', req.user); //req.user es el usuario que se logueo, passport lo guarda en la request
        res.json(req.user); //abajo en otro punto explico esto
      } catch (error) {
        next(error);
      }
    }
  );
  
module.exports = router;