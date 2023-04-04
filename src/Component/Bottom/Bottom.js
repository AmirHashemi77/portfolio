import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import AboutMe from './AboutMe/AboutMe';
import style from "./bottom.module.css"
import Skills from './Skills/Skills';
import Project from './Projects/Project';
const Bottom = () => {
    const {activeItem}=useContext(Context)
   

    return (
        <div className={`${style.container} ${activeItem ? style.actived : null}`}>
            {activeItem==="about" && <AboutMe/>}
            {activeItem==="skill" && <Skills/>}
            {activeItem==="project" && <Project/>}
        </div>
    );
};

export default Bottom;