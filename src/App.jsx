import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Content from './components/Content/content';
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/Theme/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>

        <Header />
        
        <div className='container'>
          <Content />
        </div>
        <Footer />
        
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;