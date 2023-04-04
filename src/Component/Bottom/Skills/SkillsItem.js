import React from 'react';
import style from './skillsItem.module.css';
const SkillsItem = ({skill}) => {
    return (
        <div className={style.container}>
            <img  src={`/images/skillsLogo/${skill}.svg`} alt={skill} />
            <div className={style.overlay}>{skill}</div>
        </div>
    );
};

export default SkillsItem;