import React from 'react';
import Lab1 from './lab1';
import Lab2 from './lab2';
import Lab3 from './lab3'
import Home from './Home';
import {Routes, Route} from 'react-router-dom';


const Content = () => {
  return ( <div className='cont'>
    <Routes>   
      
      <Route path="/" element={<Home />} exact/>
      <Route path="/lab1" element={<Lab1 />}/>
      <Route path="/lab2" element={<Lab2 />}/>
      <Route path="/lab3" element={<Lab3 />}/>
      


    </Routes>
      
    
  </div>
  )
};

export default Content;