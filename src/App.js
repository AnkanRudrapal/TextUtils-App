import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
      if(mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#324460"; //to change the color props
        showAlert("Dark mode has been enabled!", "success");
        // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"; //to change the color props
      showAlert("Light mode has been enabled!", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>   
      {/* <Navbar title="TextUtils" about="About Us"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
          <div className="container my-3">
            {/* <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
            <About/>
          </div> */}
            <Routes>
              <Route exact path="/about" element={<About mode={mode}/>}></Route>
              <Route exact path="/" element={<TextForm heading="TextUtils - Word & Character Counter, Space Remover, Case Converter" showAlert={showAlert} mode={mode}/>}></Route>
            </Routes>
          </div>
    </Router> 
    </>
  );
}

export default App;
