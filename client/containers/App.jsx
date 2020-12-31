import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Landing from './Landing.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';



  ///Landing
    //NavBar
    //add account btn
        //account list
            //account

    //Account Info Container
        //Info - not a component

    //DisplayData

    //Transaction Container
        //Transaction

const App = () => (
  <Router> 
    <Switch>
      <Route path="/" exact component = {SignIn} />
      <Route path="/signup" exact component = {SignUp} />
      <Route path="/landing" component = {Landing} />
    </Switch>
  </Router> 
  )




export default App;