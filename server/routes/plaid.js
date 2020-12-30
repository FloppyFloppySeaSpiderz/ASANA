const express = require('express');
const plaidController = require('../controllers/plaidController.js');
const router = express.Router();
const dbController = require('../controllers/dbController.js');

router.post('/get_link_token', plaidController.getLinkToken, (req, res) => {
  return res.status(200).json(res.locals.linkToken);
});

router.post('/get_access_token', plaidController.getAccessToken, (req, res) => {
  return res.status(200).json(res.locals.responseToken);
});

//This middleware chain is run after we receive the access token from Plaid. We first get all of the transactions from the Plaid API,
//add them to our DB and then return those same transactions from our DB and display them as form data.
router.get(
  '/get_transactions',
  plaidController.getTransactions,
  dbController.addAccounts,
  dbController.addBankTransactions,
  dbController.getBankTransactions,
  dbController.getBankAccounts,
  (req, res) => {
    console.log('transaction', res.locals.transactions);
    return res.status(200).json({
      transactions: res.locals.transactions,
      accounts: res.locals.accounts,
    });
  }
);

module.exports = router;
