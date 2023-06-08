import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// TODO: Add error handling
function Login() {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, token } = useToken()

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(username, password)

    e.target.reset();
  }

    useEffect(() => {
      if (token) navigateTo('/dashboard')
  }, [token, navigateTo]);
  return (
    <div className="container" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="mt-5">LOGIN</h1>
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
      </div>
    </div>
  );
}

export default Login;