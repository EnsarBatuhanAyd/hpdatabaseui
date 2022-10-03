import React, { useState, useEffect } from "react";
import firebaseApp from "../firebase";
import "./Login.css";
import logo from "./../img/logo.png";
import Interface from "../Pages/InterfacePage"
// import { logInWithEmailAndPassword } from "firebase/auth";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from "react-router-dom";

const auth = getAuth(firebaseApp());
const Login = ()  => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);

  const [errorMessages, setErrorMessages] = useState({});
  // const [user, loading, error] = useAuthState(auth);

  const errors = {
    errorlog: "Invalid mail or password please check it!",
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setStatus(false);
    } catch (err) {
      console.error(err);
      setErrorMessages({ name: "errorlog", message: errors.errorlog });
    }
  };
  return (
    <div className="Login">
      <div className="bg-Login">
        <div className="Login-logo-title-area">
          <ul className="Login-logo-title-area-content">
            <li className="logo-area">
              <img src={logo}></img>
            </li>
            <li className="main-title">Login to database</li>
          </ul>
        </div>
        <div className="Login-form">
          <div className="Login-enterance-area">
            <div className="Login-enterance">
            <div className="error-decoration">
                {renderErrorMessage("errorlog")}
              </div>
              <input
                className="Login-enterbox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                required
              />

              <input
                className="Login-enterbox"
                type="password"
                name="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            
              <div className="Login-button-area">
                <button
                  className="Button-enter"
                  onClick={() => logInWithEmailAndPassword(email, password)}
                  type="submit"
                >
                  SUBMİT
                </button>
                {status ? <Redirect to="/" /> : <Interface/>}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
