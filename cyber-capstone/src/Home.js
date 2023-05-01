import React from "react";
import img1 from './images/business-people-shaking-hands-together.jpg'
function Home(){

    return (
        <div className="homeDiv">
            <h1 className="homeTitle">Real Business LLC</h1>
            <h3>We are a real business, and we stand by that.</h3>
            
            <img src={img1} alt='dobis'/>
           
        </div>
    )
}

export default Home;