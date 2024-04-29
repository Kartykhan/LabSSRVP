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
        <li><Link to="/lab6">Лабораторная работа 6</Link></li>
        <li><Link to="/lab7">Лабораторная работа 7</Link></li>
        <li><Link to="/lab8">Лабораторная работа 8</Link></li>
        <li><Link to="/lab9">Лабораторная работа 9</Link></li>
        
      </ul>    
    </div>
  );
};

export default Menu;
