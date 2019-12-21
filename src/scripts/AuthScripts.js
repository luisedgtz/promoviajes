import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "firebase";
import { AuthContext } from "./AuthContext";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home"/>;
  }

  return (
    <div style={{height: "100vh"}} className="valign-wrapper">
    <div className="AuthSign row container">
    <div className="col s6 push-s3">
      <div className="card blue-grey darken-4">
      <div className="card-content container white-text">

        <h5 style={{margin:20, fontWeight:'bold', textAlign:'center'}}>Admin Login</h5>

      <div className="row">
        <form onSubmit={handleLogin} autoComplete="off" spellCheck="false" className="col s12">
          
          <div className="row">
            <div className="input-field col s12">
              <i id="email-icon" className="material-icons prefix">account_circle</i>

              <input
                autoComplete="off" 
                id="icon_mail" 
                type="email" 
                name="email"
                className="white-text"/>

              <label id="email" for="icon_mail">Correo Electrónico</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i id="password" className="material-icons prefix">lock</i>

              <input
              autoComplete="off"
              id="icon_pass" 
              type="password"
              name="password"
              className="white-text container"/>

              <label id="password" for="icon_pass">Contraseña</label>
            </div>
          </div>


          <div className="col s12">
          <button className="waves-effect waves-light btn-small deep-orange lighten-2 col s12" type="submit" name="login">Iniciar sesión</button>          
          </div>

        </form>

      </div>


      </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default withRouter(Login)