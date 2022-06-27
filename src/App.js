/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import  React, {useState} from 'react';
import Alert from './components/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //Whether dark mode is enabled or not

const [alert, setalert] = useState(null);

const showAlert = (message, type)=>{
  setalert({
      msg: message,
      type: type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
}

  const removeClass = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    removeClass();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - LightMode'
    }
  }

  return (
    <>

      
      {/* <Navbar title= "TextUtils" about="About Us"/> */}
      {/* { <Navbar/> } */}

      <Router> 
      <Navbar title = "TextFUN" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
       <div className="container my-3">
       <Switch>
          <Route exact path="/about">
            <About mode  = {mode}/>
          </Route>
          <Route exact path="/">
          <TextForms showAlert={showAlert} mode={mode} heading ="Write Something to analyze"title="Hello Brother"/>
          </Route>
        </Switch>
        
      </div>
      </Router>

    </>
  );
}

export default App
