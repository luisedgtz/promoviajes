import React from 'react';
import firebase from 'firebase'
import NavBar from '../components/NavBar';
import Home from '../components/Home'


class HomeScripts extends React.Component{

  constructor(props){
    super(props);
    this.state={

    }
  }

  
  render(){
    return(
      <div>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    )
  }
}

export default HomeScripts;