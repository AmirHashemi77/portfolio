import React from 'react';
import style from "./contactMeItem.module.css"

const ContactMeItem = ({name,link}) => {
    return (
        <a href={link} target="_blank"  rel="noreferrer"  className={style.container}>
            <img src={`/images/${name}.png`} alt={name} className={style.socialMediaImg} />
        </a>
       
    );
};

export default ContactMeItem;