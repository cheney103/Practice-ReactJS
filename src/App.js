//import logo from './logo.svg';
//import MyImage from './images/somethibg.png';
import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/About';



function App() {
  return (
    <Router>
    <div class="flex flex-col h-screen justify-between">
      <Header/>
      <Switch>
      <Route path="/" exact component={Content}/>

        <Route path="/about" exact component={About}/>
      </Switch>
      
    
      <Footer/>
     

    </div>
    </Router>
    
  );
}

export default App;
