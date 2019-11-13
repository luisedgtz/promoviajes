import React from 'react'
import Home from './Home'
import Logo from './assets/logo.svg'
import firebase from 'firebase';


export default (props)=>{
    return(
      <nav style={{height:80}} id="nav" className="Nav">
      <div class="nav-wrapper blue-grey darken-4">


          <img className="brand-logo center" style={{margin: 10}} src={Logo} height="60" alt=""></img>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <button class="waves-effect waves-light btn-flat white-text" onClick={()=>firebase.auth().signOut()}>Salir</button>
        </ul>
      </div>
    </nav>
    )
}
