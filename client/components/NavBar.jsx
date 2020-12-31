import React, { useCallback } from 'react';
import AccountList from './AccountList.jsx'
import Button from '@material-ui/core/Button';
import PlaidButton from './PlaidButton.jsx'


const NavBar = (props) => {

      return (
        <div className = "navbar">
          
        <PlaidButton />
        <AccountList accounts={props.accounts} onChange={props.onChange}/>
        </div>
      );
};

export default NavBar;