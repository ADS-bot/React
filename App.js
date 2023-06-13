import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //to check whether dark mode is on or not
  const [alert, setAlert] = useState(false);
  //function to change the mode
  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  } 
  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode= {toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>
<TextForm 
alert={alert}
showAlert={showAlert}
 heading="Enter The Text" mode={mode} />
<About/>
</div>


    </>
  );
}

export default App;
