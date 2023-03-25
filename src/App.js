import React, {useState} from "react";
import Alert from "./components/Alert";
import Myform from "./components/Myform";
import Navigation from "./components/Navigation";


function App() {
  const [mode, setMode] = useState('white');
  const [textcolor, setTextcolor] = useState('black');
  const [btntext, setBtnText] = useState('Dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
          msg: message,
          type: type
      });
      setTimeout(() => {
          setAlert();
      },1500);
  }

  const toggleMode = () => {
      if (mode === 'white') {
          setMode('gray');
          setTextcolor('white');
          setBtnText('White');
          showAlert('Dark mode has been enabled', 'Success');
      } else {
          setMode('white');
          setTextcolor('black');
          setBtnText('Dark');
          showAlert('Light mode has been enabled', 'Success');
      }
  }
  
  return (
    <div className={`bg-${mode}-400 w-full h-screen`}>
      <Navigation mode={mode} textcolor={textcolor} btntext={btntext} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Myform mode={mode} heading='Enter your text for analyze' showAlert = {showAlert} />
    </div>
  );
}

export default App;
