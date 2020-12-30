const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

//routers:
//apiRouter is connected to the SQL database. Performs operations for bank transactions on the database.
const dbRouter = require('./routes/db.js');
//plaidRouter connects to the Plaid API and verifies the user's bank information and allows us access to make API requests for bank transactions
const plaidRouter = require('./routes/plaid.js');
//bcryptRouter encrypts, stores and checks passwords connected to a separate SQL table on the database.
const bcryptRouter = require('./routes/bcrypt.js');

//body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//plaid vars
// const plaid = require('plaid');
// const { request } = require('http');
// const client = new plaid.Client({
//   clientID: '',
//   secret: '',
//   env: plaid.environments.sandbox, // need to download sandbox into this directory.
//   options: {
//     version: '2020-09-14',
//   },
// });

//route handlers:
app.use('/database', dbRouter);
app.use('/test', plaidRouter);
app.use('/bcrypt', bcryptRouter);

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});
