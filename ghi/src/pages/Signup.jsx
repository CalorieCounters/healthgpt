import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// TODO: Add error handling
function Signup() {
  const { register } = useToken();
  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleRegistration = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts/`;
    const accountData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
    };

    register(accountData, url);

    navigateTo("/dashboard");
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  return (
    <div className="container" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="mt-5">SIGN UP</h1>
      <form className="mt-4" onSubmit={handleRegistration}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-control"
            onChange={handleFormChange}
            placeholder="First Name"
            required
            type="text"
            name="firstName"
            value={formData.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="form-control"
            onChange={handleFormChange}
            placeholder="Last Name"
            required
            type="text"
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ends">Gender</label>
          <select
            value={formData.gender}
            onChange={handleFormChange}
            placeholder="gender"
            name="gender"
            required
            type="text"
            id="gender"
            className="form-control"
          >
            <option value="">Select a Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            onChange={handleFormChange}
            placeholder="Username"
            required
            type="text"
            name="username"
            value={formData.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            onChange={handleFormChange}
            placeholder="Email"
            required
            type="email"
            name="email"
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            onChange={handleFormChange}
            placeholder="Password"
            required
            type="password"
            name="password"
            value={formData.password}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
