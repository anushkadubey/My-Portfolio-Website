import React from 'react';
import { SocialLinks } from '../../Data/sociallinks';
import Separator from '../../Separator';
import "./contact.css";

function Contact() {
    const links= SocialLinks;
    return (
        <div className="contact">
            <Separator />
            <div className="contactTop">
                <label className="sectionTitle">Contact</label>               
                <div className="email">Email: anushka16dubey@gmail.com</div>
                <div className="resume"><a download href={require(".././../../Assets/Resume.pdf")}>
                    <i className="fi fi-br-download"></i>Download Resume
                    </a></div>
                <div className="contactHeading">Get in touch with me on my socials!</div>
            </div>
            <div className="contactBottom">
                {links.map((item)=>{
                    return(
                        <a href={item.link}>
                        <div className="socialIconDiv">
                        <img src={item.icon} alt="" className="socialIcon" />
                        </div>
                        </a>
                );    
                     } )}
            </div>
        </div>
    )
}

export default Contact
