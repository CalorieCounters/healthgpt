import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./NavBar"
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";

import "./App.css";
import MealForm from "./MealForm.js";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider baseUrl={process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}>
        <NavBar />
        <div>
          <Routes>
              <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/MealForm" element={<MealForm />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
