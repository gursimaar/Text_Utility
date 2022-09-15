import React,{ useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#41464b";
      showAlert("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextFile" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-4">
        <Switch>
            <Route path="/about">
              <About  mode={mode}/>
            </Route>
            <Route path="/">
              <Textform
                showAlert={showAlert}
                label="Text Area"
                heading="Enter the text to analyze"
                mode={mode}
              />
           </Route>
       </Switch> 
      </div>
      </Router>
      
      </>
  );
}

export default App;
