import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from './SignUp.jsx';
import { AppContext } from "../components/ContextProvider";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.setAccountIndex = (index) => {
      this.setState((state) => ({
        accountIndex: index,
      }));
    };

    this.state = {
      accountIndex: 0,
      setAccountIndex: this.setAccountIndex,
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/landing" component={Landing} />
            <Route path="/signup" exact component = {SignUp} />
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

// const App = () => (
//   <Router>
//     <Switch>
//       <Route path="/" exact component = {SignIn} />
//       <Route path="/landing" component = {Landing} />
//     </Switch>
//   </Router>
//   )

export default App;