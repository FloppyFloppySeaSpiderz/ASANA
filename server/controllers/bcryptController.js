// const { Client } = require('pg');
// const database = new Client({
//   connectionString: process.env.POSTGRES_API,
// });
// database.connect();
const database = require('../models/dbModels');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const bcryptController = {};

//Hash the password and store username, hash
bcryptController.createPassword = (request, response, next) => {
  const { password, username } = request.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      return next(err);
    }
    request.body = { hash, username };
    return next();
  });
};

//checks password input against the database and returns a boolean
bcryptController.checkPassword = (request, response, next) => {
  console.log('getting username');
  const { password, username } = request.body;
  const text = `SELECT * FROM bc_storage WHERE username='${username}'`;
  let data;
  database.query(text, (err, res) => {
    if (err) {
      return next(err);
    } else {
      data = res;
      console.log('comparing passwords');
      bcrypt.compare(password, data.rows[0].hash, function (err, res) {
        if (err) return next(err);
        response.locals.result = res;
        return next();
      });
    }
  });
};

//Stores encrypted password with username in db.
bcryptController.storeUserCredentials = (request, response, next) => {
  const { username, hash } = request.body;
  const text = `INSERT INTO bc_storage (username, hash) VALUES ('${username}', '${hash}');`;
  database.query(text, (err, res) => {
    if (err) {
      return next(err);
    } else {
      console.log('completed query');
      return next();
    }
  });
};

module.exports = bcryptController;
