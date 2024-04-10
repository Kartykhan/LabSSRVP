import React from "react";
import './c.css';
import Container from '../Container/container'
import Button from "../butt1";

const handleClick = () => {
    console.log("ГОЙДА");
  };

const Lab2 = () => {
    return (
        <div>
            <h2>2 лаба</h2>
            <h1>Hello world!</h1>
            <Container>
                <div>
                    
                    <Button label="Кнопочка гойды" onClick={handleClick} />
                    <h4>(Кнопочка считает гойды в консоли)</h4>
          
                </div>
            </Container>
            
        </div>
    )
}

export default Lab2