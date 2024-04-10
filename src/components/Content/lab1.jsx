import React from "react";
import Iframe from "react-iframe";
import './c.css';


const Lab1 = () => {
    return (
        <div>
            <h2>1 лаба</h2>
            <iframe className="lab1" src="src\components\Content\laba1.html"  width={800} height={600}></iframe>
            {/* черерз  Router  */}
        </div>
    )
}

export default Lab1