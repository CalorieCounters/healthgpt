// import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// TODO: Add error handling
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import * as firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css";



function Login() {
  const navigateTo = useNavigate();
  // const [accountInfo, setAccountInfo] = useState({
  //   email: '',
  //   uid: ''
  // })

  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_apiKey}`,
    authDomain: `${process.env.REACT_APP_authDomain}`,
    projectId: `${process.env.REACT_APP_projectId}`,
    storageBucket: `${process.env.REACT_APP_storageBucket}`,
    messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
    appId: `${process.env.REACT_APP_appId}`,
    measurementId: `${process.env.REACT_APP_measurementId}`
  };

  const app = firebase.initializeApp(firebaseConfig);
  let ui = firebaseui.auth.AuthUI.getInstance();
  if (!ui) ui = new firebaseui.auth.AuthUI(app.auth());

  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        console.log('authResult', authResult)
        console.log('redirectUrl', redirectUrl)

        // setAccountInfo({
        //   email: authResult.user._delegate.email,
        //   uid: authResult.user._delegate.uid
        // })
        createAccount(authResult.user._delegate.email, authResult.user._delegate.uid)
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/dashboard',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  // console.log("BEFORE CREATE", accountInfo)

  const createAccount = async (email, uid) => {
        const authData = {
          email: email,
          uid: uid
        }

        const fetchUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts`
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(authData),
          headers: {
            "Content-Type": "application/json"
          }
        }

        try {
          const accountResponse = await fetch(fetchUrl, fetchConfig)

          if (accountResponse.ok) {
            // setAccountInfo({
            //   email: '',
            //   uid: ''
            // })
            navigateTo('/dashboard')
          }
        } catch (e) {
          console.log("Error with Login", e)
        }
      }

  ui.start('#firebaseui-auth-container', uiConfig);

  return (
    <div className="container" style={{ maxWidth: "400px", margin: "0 auto" }}>
      {/* <h1 className="mt-5">LOGIN</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Username:</label>
          <input
            name="username"
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label">Password:</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div> */}
      <h1>LOGIN</h1>
      <div id="firebaseui-auth-container"/>
    </div>
  );
}

export default Login;
