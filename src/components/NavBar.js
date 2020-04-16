import React from 'react'
import Logo from './assets/logo.svg'
import firebase from 'firebase';


export default class NavBar extends React.Component{

  componentDidMount=()=>{
    const M=window.M;
    M.AutoInit();
  }

  render(){
    return(
      <div>

        <nav id="nav" className="Nav">
        <div class="nav-wrapper blue-grey darken-4">
            <a href="#" data-target="slide-out" class="btn" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
            <a href="/" ><img className="brand-logo center" style={{margin: 10}} src={Logo} height="40" alt=""></img></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves white-text"><i class="material-icons">search</i></a></li>
            <li><a class="waves-effect waves white-text"><i class="material-icons">account_box</i></a></li>
            <li><a class="waves-effect waves white-text" onClick={()=>firebase.auth().signOut()}>Salir</a></li>
          </ul>
        </div>
      </nav>
      
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large deep-orange lighten-2 pulse">
          <i class="large material-icons">apps</i>
        </a>
        <ul>
          <li><a class="btn-floating blue-grey darken-4"><i class="material-icons">add</i></a></li>
          <li><a class="btn-floating blue-grey darken-4"><i class="material-icons">calendar_today</i></a></li>
          <li><a class="btn-floating blue-grey darken-4"><i class="material-icons">assessment</i></a></li>
          <li><a class="btn-floating blue-grey darken-4"><i class="material-icons">book</i></a></li>
        </ul>
      </div>

      <ul id="slide-out" className="sidenav blue-grey darken-4">
        <div style={{paddingTop:64}}>
        <li><a href="/reservations" className="white-text"><i className="material-icons white-text">assignment</i>Reservaciones</a></li>
        <li><a href="/reports" className="white-text"><i className="material-icons white-text">assessment</i>Reportes</a></li>
        <li><a href="/catalogs" className="white-text"><i className="material-icons white-text">library_books</i>Catalogos</a></li>
        <li><a href="/usdchange" className="white-text"><i className="material-icons white-text">monetization_on</i>Tipo de cambio</a></li>
        <li><a href="/users" className="white-text"><i className="material-icons white-text">account_box</i>Usuarios</a></li>
        </div>
      </ul>

      
      </div>      
    )
}
}
