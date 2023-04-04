import React from 'react';
import style from "./menu.module.css"
import MenuItem from './MenuItem';

const Menu = ({setActiveItem}) => {
    return (
        <div className={style.container}>
            <MenuItem title="About Me" type="about"/>
            <MenuItem title="Skills" type="skill"/>
            <MenuItem title="Projects" type="project"/>
        </div>
    );
};

export default Menu;