import React from 'react';
import "./about.css";

function About() {
    return (
        <div className="about">
            <label className="sectionTitle">About me</label>
            <div className="aboutInfo">
            <p>Hey there! I'm <span className="impName">Anushka</span>, a web dev enthusiast who is always fascinated by the ever-evolving technology and the ground-breaking innovations. I am a fresh grad, currently working as an <span className="impName">Associate Software Engineer</span> at <span className="impName">Lowe's</span>.
            <p>My aspirations include learning more about web development and other domains which will help me create strong and useful web applications.</p>
            <p>I constantly try to contribute more to several open source projects to give back to the community and enhance my skill set.</p>
            </div>
            <div className="aboutPicture">
                <img src={require("../../../Assets/Codinganime.png")} alt="" className="aboutPictureLogo" />
        </div>
        </div>
    );
}
export default About
