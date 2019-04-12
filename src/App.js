import React, { Component } from 'react';
import Navigation from "./components/header/Header";
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/Services";
import SignIn from './components/pages/signin/SignIn';
import SignUp from './components/pages/signup/SignUp';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <header>
        <Navigation />
        </header>
        <sectioin>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/*" component={()=><h1>404 page not found</h1>} />
          </Switch>
          </sectioin>
        </Router>
      </div>
    );
  }
}

export default App;
