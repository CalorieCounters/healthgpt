// import useToken from "@galvanize-inc/jwtdown-for-react";
import React from "react";
// import { useNavigate } from "react-router-dom";

// TODO: Add error handling
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import * as firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css";


function Login() {
  // const navigateTo = useNavigate();
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const { login, token } = useToken()

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // login(username, password)
  //   const login = async () => {
  //     const accountURL = `http://localhost:8000/api/accounts${username}`

  //     const fetchConfig = {
  //       method: "get"
  //     }
  //   }

  //   e.target.reset();
  // }

  //   useEffect(() => {
  //     navigateTo('/dashboard')
  // }, [navigateTo]);



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
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
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
