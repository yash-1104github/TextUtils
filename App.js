import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';
import React ,{ useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode,setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(()=>{
        setAlert(null);
       },1000);
  }
  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }

  const toggleMode = () => {
  // const toggleMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
   }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} aboutText="About us" />
      <Alert alert = {alert}/>
      <div className = "container my-3 ">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact  path="/"
              element={<FormText showAlert={showAlert} heading=" Try MyApp - word counter, character counter, copy text" mode={mode} />}>
          </Route>
        </Routes>
      </div>
      </BrowserRouter> 
        </>
  );
}

export default App;
{  /* my-3 is a attribut for pading and spacing */ }
