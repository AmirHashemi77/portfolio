import React from 'react';
import style from './skills.module.css'
import SkillsItem from './SkillsItem';
const Skills = () => {
    return (
        <div className={style.container}>
            <SkillsItem skill='html'/>
            <SkillsItem skill='css'/>
            <SkillsItem skill='javascript'/>
            <SkillsItem skill='typescript'/>
            <SkillsItem skill='react'/>
            <SkillsItem skill='redux'/>
            <SkillsItem skill='git'/>
            <SkillsItem skill='tailwind'/>
            <SkillsItem skill='sass'/>
        </div>
    );
};

export default Skills;