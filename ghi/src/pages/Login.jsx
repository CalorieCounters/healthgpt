import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState } from "react";
// TODO: Handle navigation to some homepage
// TODO: Add error handling
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, fetchWithToken } = useToken()

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(username, password);

    e.target.reset()
  }

  return (
    <>
      <div>
        <h1>LOGIN</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Username: </label>
            <input
              name="username"
              type='text'
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="form-label">Password: </label>
            <input
              name="password"
              type='password'
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
