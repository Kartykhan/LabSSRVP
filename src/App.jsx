import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Container from './components/Container/container';
import Menu from './components/Menu';
import Button from './components/butt1';
import Content from './components/Content/content';
import "./App.css"



function App() {
  

  const handleClick = () => {
    console.log("ГОЙДА");
  };

  return (
    <div>
      
      <Header>
      </Header>
      
      <Container>
      
      <Button label="Кнопочка" onClick={handleClick} />
      <h2>Hello World</h2>
      </Container>

      
      
      <Footer>
      </Footer>
    </div>
  );
}

export default App;