const express = require('express');
const router = express.Router();
const bcryptController = require('../controllers/bcryptController.js');

router.post(
  '/create_pw',
  bcryptController.createPassword,
  bcryptController.storeUserCredentials,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

router.post('/check_pw', bcryptController.checkPassword, (req, res) => {
  return res.status(200).send(res.locals.result);
});

module.exports = router;
