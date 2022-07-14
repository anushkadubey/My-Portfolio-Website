import React from 'react';
import "./about.css";

function About() {
    return (
        <div className="about">
            <label className="sectionTitle">About me</label>
            <div className="aboutInfo">
            <p>Hi! I'm <span className="impName">Anushka</span>, a final year undergraduate at <span className="impName">NIT Jamshedpur</span>. I'm pursuing my Bachelors in <span className="impName">Electronics and Communication Engineering</span>.
                I love developing and designing web apps. Currently, I'm also working upon my knowledge of Data Structures and Algorithms.</p>
            <p>My aspirations include learning more about web development which will help me create strong and useful web applications. I also want to contribute to the community by working on diverse open source projects.</p>
            <p>A constant learner who believes in mutual learning and growth.</p>
            </div>
            <div className="aboutPicture">
                <img src={require("../../../Assets/Codinganime.png")} alt="" className="aboutPictureLogo" />
        </div>
        </div>
    );
}
export default About
