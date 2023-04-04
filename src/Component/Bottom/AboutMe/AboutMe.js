import React from 'react';
import style from "./aboutMe.module.css"
import AboutSection from './AboutSection';
import ContactMe from './ContactMe';
const AboutMe = () => {
    return (
        <div className={style.container}>
            <AboutSection/>
            <ContactMe/>
        </div>
    );
};

export default AboutMe;