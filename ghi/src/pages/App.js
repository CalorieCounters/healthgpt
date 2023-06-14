import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Login from "./Login";
import Signup from "./Signup";
import Nav from "./Nav";

import "../css/App.css";
import MealForm from "./MealForm.jsx";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import EatenMealList from "./EatenMealList.jsx";
import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ExerciseList";

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
            <Route path="/log-meal" element={<MealForm />} />
            <Route path="/meal-history" element={<EatenMealList />} />
            <Route path="/log-exercise" element={<ExerciseForm />} />
            <Route path="/exercise-history" element={<ExerciseList />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
