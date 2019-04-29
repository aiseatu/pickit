const userQueries = require("../db/queries.users.js");
const passport = require("passport");

module.exports = {
  create(req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password,
    };
    userQueries.createUser(newUser, (err, user) => {
      if(err){
        res.send({error: err.message});
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send(req.user);
        })
      }
    })
  }
}
