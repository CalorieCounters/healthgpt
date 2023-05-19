import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import Nav from "./Nav.js";
import Homepage from "./Homepage.js";
import Dashboard from "./Dashboard";
import LogAMeal from "./LogAMeal";
import Exercise from "./Exercise";

function App() {
  const [launchInfo, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
      console.log("fastapi url: ", url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, []);

  return (
    // <Nav />
    // <div>
    //   <ErrorNotification error={error} />
    //   <Homepage info={launchInfo} />
    // </div>

    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="nutrition">
            <Route path="log-a-meal" element={<LogAMeal />} />
          </Route>
          <Route path="exercise" element={<Exercise />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
