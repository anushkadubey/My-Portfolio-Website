import React from 'react';
import "./intro.css";

function Intro() {
    return (
        <div className="intro">
            <div>
                <img src={require("../../Assets/intropic.jpg")} alt="" className="introPic"/>
            </div>
            <div className="introContent">Anushka Dubey</div>
            <div className="introContent2">Junior Year|ECE|NIT Jamshedpur</div>
        </div>
    )
}

export default Intro
