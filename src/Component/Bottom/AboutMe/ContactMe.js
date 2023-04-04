import React from 'react';
import style from './contactMe.module.css';
import ContactMeItem from './ContactMeItem';
const ContactMe = () => {
    return (
        <div className={style.container}>
             <h3 className={style.title}>Contact Me</h3>
             <div className={style.socialMediaItems}>
                <ContactMeItem name='gmail' link='mailto: amirhashemi539@gmail.com'/>
                <ContactMeItem name='github' link='https://github.com/AmirHashemi77'/>
                <ContactMeItem name='linkedin' link='https://www.linkedin.com/in/amirhashemi77/'/>
             </div>
        </div>
    );
};

export default ContactMe;