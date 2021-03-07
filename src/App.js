//import logo from './logo.svg';
//import MyImage from './images/somethibg.png';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/About';
import SignUp from './components/SignUp';
import InfoList from './InfoList';

function useWindowSize(){
  const [size, setSize] = useState([window.innerHeight,window.innerWidth]);

  useEffect(() =>{
    const handleResize = () =>{
      setSize([window.innerHeight, window.innerWidth]); 

    };
    window.addEventListener("resize", handleResize);
    return () =>{
      window.removeEventListener("resize",handleResize);
    }
  },[]);

  return size;
}

function App() {
  const [height,width]= useWindowSize();
  return (
    
    <Router>


    <div class="flex flex-col h-screen justify-center">
      <Header/>
      <Switch>
      <Route path="/" exact component={Content}/>

        <Route path="/about" exact component={About}/>
        <Route path="/signup" exact component={SignUp}/>
      </Switch>
      
    
      <Footer/>
     

    </div>
    </Router>
    
  );
}

export default App;
