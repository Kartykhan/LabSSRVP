import React, { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom'


const Menu = () => {


  return (
    <div className="menu">
      <h2>Меню</h2>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/lab1">Лабораторная работа 1</Link></li>
        <li><Link to="/lab2">Лабораторная работа 2</Link></li>
        <li><Link to="/lab3">Лабораторная работа 3</Link></li>
        <li><Link to="/lab4">Лабораторная работа 4</Link></li>
        <li><Link to="/lab5">Лабораторная работа 5</Link></li>
        
      </ul>
      
    </div>
  );
};

export default Menu;
