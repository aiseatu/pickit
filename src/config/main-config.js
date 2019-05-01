require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");
const passportConfig = require("./passport-config");

module.exports = {
  init(app, express){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
      secret: process.env.cookieSecret,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1.21e+9 }
    }));
    app.use(flash());
    passportConfig.init(app);
    app.use((req, res, next) => {
      res.locals.currentUser = req.user;
      next();
    });
    if (process.env.NODE_ENV === "production") {
      // Serve any static files
      app.use(express.static(path.join(__dirname, '..', '..', 'client/build')));
      // Handle React routing, return all requests to React app
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'client/build', 'index.html'));
      });
    }
    //app.use(express.static(path.join(__dirname, 'client/build')));

  }
};
