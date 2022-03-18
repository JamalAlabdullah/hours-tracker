import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import RegisterForm from "./components/registerForm";
import LoginForm from './components/loginForm';
import Home from "./components/home";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className= "content">
          <Switch>
          <Route path="/loginForm"  component={LoginForm}/>
          <Route path="/registerForm"  component={RegisterForm}/>
          <Route path="/not-found"  component={NotFound}/>
          <Route path="/home"  component={Home}/>
          <Redirect to="/not-found"/>
          </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
