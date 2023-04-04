import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import Menu from './Menu/Menu';
import Title from './Title/Title';
import style from "./top.module.css"
const Top = () => {
   const {activeItem}=useContext(Context)
    return (
        <div className={`${style.container} ${activeItem ? style.actived : null}`}>
            <Title/>
            <Menu/>
        </div>
    );
};

export default Top;