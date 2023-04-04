import React from 'react';
import style from "./title.module.css"
const Title = () => {
    return (
        <div className={style.container}>
            <h1 className={style.name}>Amir Hashemi</h1>
            <h2 className={style.subtitle}>FRONT-END DEVELOPER</h2>
            <div className={style.brodering}></div>
        </div>
    );
};

export default Title;