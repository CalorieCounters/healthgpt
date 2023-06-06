import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./Nav";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";

import "./App.css";
import MealForm from "./MealForm.js";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import EatenMealList from "./EatenMealList";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider baseUrl={process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/log-a-meal" element={<MealForm />} />
            <Route path="/eaten-meals" element={<EatenMealList />} />

          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
