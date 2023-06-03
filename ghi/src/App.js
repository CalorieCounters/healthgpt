import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage.js";
import Dashboard from "./Dashboard.js"
import Nav from "./Nav";
import "./App.css";
// import ErrorNotification from "./ErrorNotification";


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
    // <div>
    //   <ErrorNotification error={error} />
    //   <Construct info={launchInfo} />
    // </div>

    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
