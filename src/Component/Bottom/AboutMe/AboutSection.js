import React from 'react';
import style from "./aboutSection.module.css"
const AboutSection = () => {
    return (
        <div className={style.container}>
            <h3 className={style.title}>About Me</h3>
            <p className={style.about}>
            Hello, my name is Amir Hashemi, I am 25 years old, and I live in Tehran. I am a front end developer. My university major is accounting, but due to my interest in technology, I started learning programming along with work and studies and tried to I will improve this field. I try to do my work regularly, exercise regularly and learn the appropriate technologies for my work.
            </p>
        </div>
    );
};

export default AboutSection;