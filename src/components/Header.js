import React  from 'react';
import logo from "../images/somethibg.png";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

const Header = () =>{

    return(
    
      
        <nav class="bg-indigo-500 p-4 flex items-center m-2 rounded-md">
            
          
            <div class="w-6/12 sm:w-4/12 px-4">
                <img src={logo} width="120" height="120" alt="Logo" class="shadow rounded max-w-full h-auto align-middle border-none"/>
            </div>
                <div class="ml-20">

              <ul class="flex" >
                  <Link to="/">
                      <li className="text-indigo-200 pr-8 hover:text-indigo-100">Home</li>
                  </Link>
                  <Link to="/about">
                      <li className="text-indigo-200 hover:text-indigo-100">About</li>
                  </Link>
              </ul>

            </div>

            <div class="pt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search"></input>
             <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">    

             

             <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            </button>
            </div>
      


            <div>
                <a href="#" class="inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2">Login</a>
                <a href="#" class="inline-block p-2 py-2 px-4 text-yellow-700 bg-yellow-400 rounded">Sign Up</a>
            </div>
         </nav>
        
    )
}

export default Header