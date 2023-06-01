import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
// TODO: Add error handling
function Signup() {
  const { register } = useToken();
  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })

  const handleRegistration = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts/`
    const accountData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    register(accountData, url)

    navigateTo('/login')
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value
    });
  }

  return (
      <div>
        <h1>SIGN UP</h1>
        <form onSubmit={handleRegistration}>
          <div>
          <label htmlFor="firstName">First Name: </label>
          <input onChange={handleFormChange}
            placeholder="First Name"
            required
            type="text"
            name="firstName"
            value={formData.firstName}
          />
          </div>
          <div>
          <label htmlFor="lastName">Last Name: </label>
          <input onChange={handleFormChange}
            placeholder="Last Name"
            required
            type="text"
            name="lastName"
            value={formData.lastName}
          />
          </div>
          <div>
          <label htmlFor="username">Username: </label>
          <input onChange={handleFormChange}
            placeholder="Username"
            required
            type="text"
            name="username"
            value={formData.username}
          />
          </div>
          <div>
          <label htmlFor="email">Email: </label>
          <input onChange={handleFormChange}
            placeholder="Email"
            required
            type="email"
            name="email"
            value={formData.email}
          />
          </div>
          <div>
          <label htmlFor="password">Password: </label>
          <input onChange={handleFormChange}
            placeholder="Password"
            required
            type="password"
            name="password"
            value={formData.password}
          />
          </div>
          <button>Submit</button>
        </form>
      </div>
  )
}

export default Signup;
