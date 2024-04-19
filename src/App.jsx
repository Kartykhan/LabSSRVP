import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Content from './components/Content/content';
import Menu from './components/Menu/menu';
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/Theme/ThemeContext';
import ThemeToggle from './components/Theme/ToggleTheme';



function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>

        <Header />
        <Menu />
        <ThemeToggle />
        <Content />
        <Footer />
        
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;