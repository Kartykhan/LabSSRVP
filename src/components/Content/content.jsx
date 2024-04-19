import React from 'react';
import Lab1 from './lab1';
import Lab2 from './lab2';
import Lab3 from './lab3';
import Lab4 from './lab4';
import Lab5 from './lab5';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';


const Content = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme);
  return ( <div className={`container-${theme}`}>
    <Routes>   
      
      <Route path="/" element={<Home />} exact/>
      <Route path="/lab1" element={<Lab1 />}/>
      <Route path="/lab2" element={<Lab2 />}/>
      <Route path="/lab3" element={<Lab3 />}/>
      <Route path="/lab4" element={
        <Provider store={store}>
          <Lab4 />
        </Provider>}/>
      <Route path="/lab5" element={<Lab5 />}/>
      
    </Routes>
  </div>
  )
};

export default Content;