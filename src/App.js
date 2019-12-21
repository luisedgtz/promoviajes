import React from 'react';
import './App.css';
import firebase from 'firebase'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AuthScripts from './scripts/AuthScripts';
import { AuthProvider } from './scripts/AuthContext';
import PrivateRoute from './scripts/PrivateRoute';
import NavBar from './components/NavBar';

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
  }
  

  render(){
    return(
      <div className="App">
        <AuthProvider>
        <Router>
          <div>
            <Route exact path="/" component={AuthScripts}/>
            <PrivateRoute exact path="/home" component={NavBar}/>
          </div>
        </Router>
        </AuthProvider>
      </div>
    )
  }
}