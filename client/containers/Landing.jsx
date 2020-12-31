import React, { useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom';
import Connect from '../components/NavBar.jsx';
import AccountInfo from '../components/AccountInfo.jsx';
import NavBar from '../components/NavBar.jsx';
import DisplayData from '../components/DisplayData.jsx';
import Transactions from '../components/Transactions.jsx';
import '../styles.scss';

function Landing () {
  
  const accounts = [
    {
       account_id: 'yBDqZZbGZ5HX7GBrw654cpDGKWlP4ztyw43j8',
       account_subtype: 'checking',
       account_name: 'Plaid Gold Standard 0% Interest Checking',
       acount_balance: 100,
       account_index: 0
    },
     {
       account_id: '9B5rggwqgKHnekAZP8D4fPExkdlAryuRg4GAo',
       account_subtype: 'savings',
       account_name: 'Plaid Silver Standard 0.1% Interest Saving',
       acount_balance: 200,
       account_index: 1
     },
     {
       account_id: 'vK3X77RE7AuXymK3vlqxc4ZEWeabgMFW1qzNe',
       account_subtype: 'cd',
       account_name: 'Plaid Bronze Standard 0.2% Interest CD',
       acount_balance: null,
       account_index: 2
     },
     {
       account_id: 'nWbE33JZ3wH6XP8Jv1EeU7xjAADvybF6QAerl',
       account_subtype: 'credit card',
       account_name: 'Plaid Diamond 12.5% APR Interest Credit Card',
       acount_balance: null,
       account_index: 3
     },
     {
       account_id: 'b7wE99jB9gH3ZlQ8VozXC9rZBBV687sV7mxap',
       account_subtype: 'money market',
       account_name: 'Plaid Platinum Standard 1.85% Interest Money Market',
       acount_balance: 43200,
       account_index: 4
   },
  ];

  function handleChange(newValue) {
    setValue(newValue);
  }


  return (
    <div className ="landing">
      <div className = "leftSide">
        <NavBar accounts={accounts} onChange={handleChange}/> 
      </div>
      <div className = "rightSide">
       <AccountInfo accounts={accounts}/>
      <Transactions /> 
      </div>
    </div>
  )
}

export default Landing;