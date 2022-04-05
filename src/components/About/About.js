import React, { useState } from 'react';
import './About.css'

const About = () => {
    const [aboutUse, setaboutUse] = useState(2);
    console.log(aboutUse);
    return (
        <div className='about-container'>
            <h1>We are Number one Watch brand shop in your Town , You already heard about us thats why you're reading this!!</h1>

            <h4>Thanks For Buying!!</h4>

            <div>
                <p>Name : Watch House</p>
                <p>Phone : 96482366</p>
                <p>Address: 36/4 New York , US</p>
            </div>
        </div>
    );
};

export default About;