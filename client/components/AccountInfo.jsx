import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../components/ContextProvider";

function AccountInfo (props) {

  const { accountIndex } = useContext(AppContext);
  // console.log(props.accounts[0].account_name);

  return (
    <div className = "accInfo">
      <h3>Account Information</h3>
      <p><strong>Name: </strong>{props.accounts[accountIndex].account_name}</p>
      <p><strong>Type: </strong>{props.accounts[accountIndex].account_subtype}</p>
      <p><strong>Balance: </strong>${props.accounts[accountIndex].acount_balance}</p>
   </div>
  )
}


export default AccountInfo;