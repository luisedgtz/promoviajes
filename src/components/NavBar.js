import React from 'react'
import Logo from './assets/logo.svg'
import firebase from 'firebase';

export default class NavBar extends React.Component{

  render(){
    return(
      <div>

        <nav id="nav" className="Nav">
        <div class="nav-wrapper blue-grey darken-4">
            <img className="brand-logo center" style={{margin: 10}} src={Logo} height="40" alt=""></img>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves white-text"><i class="material-icons">search</i></a></li>
            <li><a class="waves-effect waves white-text"><i class="material-icons">account_box</i></a></li>
            <li><a class="waves-effect waves white-text" onClick={()=>firebase.auth().signOut()}>Salir</a></li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" class="sidenav">
        <li><div class="user-view">
          <a href="#user"></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div></li>

        <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      </div>

      
    )
}
}
