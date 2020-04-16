import React from 'react';
import './App.css';
import firebase from 'firebase'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AuthScripts from './scripts/AuthScripts';
import { AuthProvider } from './scripts/AuthContext';
import PrivateRoute from './scripts/PrivateRoute';
import HomeScripts from './scripts/HomeScripts';
import ReservasScripts from './scripts/ReservasScripts';
import UsuariosScripts from './scripts/UsuariosScripts';

const firebaseConfig = {
  apiKey: "AIzaSyAMcoNyeePBNsS57JUwTgVcHE8mDvhpz7Y",
  authDomain: "promoviajes-1.firebaseapp.com",
  databaseURL: "https://promoviajes-1.firebaseio.com",
  projectId: "promoviajes-1",
  storageBucket: "promoviajes-1.appspot.com",
  messagingSenderId: "132953905090",
  appId: "1:132953905090:web:d1fc480b881510a6f3e85b",
  measurementId: "G-7Q465XYYP3"
};

export default class App extends React.Component{

  componentDidMount(){
    firebase.initializeApp(firebaseConfig)
    const M=window.M;
    M.AutoInit();
  }
  

  render(){
    return(
      <div className="App">
        <AuthProvider>
        <Router>
          <Switch>
          <div>
            <Route exact path="/login" component={AuthScripts}/>
            <PrivateRoute exact path="/" component={HomeScripts}/>
            <Route exact path="/reservations" component={ReservasScripts}/>
            <Route exact path="/reports" component={ReservasScripts}/>
            <Route exact path="/catalogs" component={ReservasScripts}/>
            <Route exact path="/usdchange" component={ReservasScripts}/>
            <Route exact path="/users" component={UsuariosScripts}/>
          </div>
          </Switch>
        </Router>
        </AuthProvider>
      </div>
    )
  }
}