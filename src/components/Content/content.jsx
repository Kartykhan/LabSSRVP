import React from 'react';
import Lab1 from './lab1';
import Lab2 from './lab2';
import Lab3 from './lab3';
import Lab4 from './lab4';
import Lab5 from './lab5';
import Lab6 from './lab6';
import Lab7 from './lab7';
import Lab8 from './lab8';
import Lab9 from './lab9';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Grid } from '@mui/material'; // Импортируем компонент Grid из Material-UI
import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';

const Content = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <Grid container justifyContent="center"> {/* Используем Grid для центрирования */}
      <Grid item xs={12} sm={12} md={13} lg={13}> {/* Увеличиваем количество колонок */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route
            path="/lab4"
            element={
              <Provider store={store}>
                <Lab4 />
              </Provider>
            }
          />
          <Route path="/lab5" element={<Lab5 />} />
          <Route path="/lab6" element={<Lab6 />} />
          <Route path="/lab7" element={<Lab7 />} />
          <Route path="/lab8" element={<Lab8 />} />
          <Route path="/lab9" element={<Lab9 />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default Content;
