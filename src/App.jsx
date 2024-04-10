import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Content from './components/Content/content';
import Menu from './components/Menu/menu';
import Button from './components/butt1';
import "./App.css"
import { BrowserRouter } from "react-router-dom";


function App() {
  
const handleClick = () => {
  console.log("ГОЙДА");
};



  return (
    <BrowserRouter>
      
      <Header/>
      
      {/* <Container>
        <div>
          <Button label="Кнопочка" onClick={handleClick} />
          <h2>Hello World</h2>
        </div>
      </Container> */}

      <Menu />
      <Content />

      
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;