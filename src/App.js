import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mymode, setMode] = useState("light");
  const [myAlert, setAlert] = useState(null);

  const showAlert = (mesage, type) => {
    setAlert({ msg: mesage, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mymode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled!", "success");
      document.title = "light mode is enabled.";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("dark mode is enabled!", "success");
      document.title = "dark mode is enabled.";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Text-Editor" mode={mymode} toggleMode={toggleMode} />
        <Alert AlertMsg={myAlert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-5">
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text here"
                ></TextForm>
              </div>
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={
              <div className="container my-5">
                <About />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
