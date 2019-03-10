// Configures passport strategy
const jwtstrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const { secretOrKey } = require('../config/keys');

// Configure our jwtstrategy options
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

/**
 * @params  passport
 * @desc    Takes in bearer token from auth header, compares it with secret
 * @export  passport.use - Result of passport strategy
 */
module.exports = passport => {
  passport.use(
    /**
    * @desc     Accepts Auth header: "Authorization: Bearer <JSON_WEB_TOKEN_STRING>"
    *           verifies auth header and returns the payload and completion function
    * @args     options, callback
    * @CBparams payload, done(f)
    * @docs     https://www.npmjs.com/package/passport-jwt
    */
    new jwtstrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          // If there is a user in the DB
          if (user) {
            // Return done(err, user)
            return done(null, user);
          }
          // Else return done(err, user)
          return done(null, false);
        })
        .catch(err => console.error(err));
    }));
};