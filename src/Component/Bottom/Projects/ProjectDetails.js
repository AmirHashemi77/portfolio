import React from 'react';

import style from './projectDetails.module.css';
const ProjectDetails = ({activeProject}) => {
    const projectData={
        snappfood:{
            id:"snappfood",
            title:"SnappFood Clone",
            text:"This project is a clone of the Snappfood website, Snappfood is an online food ordering platform, and I tried to implement the front-end part of this website responsively.",
            technologies:['React','ReactRouter','Redux/ReduxTolkit','Sass'],
            linkName:'SnappfoodClone',
            githubUrl:"https://github.com/AmirHashemi77/snappfood",
            cloneUrl:"https://snappfood.amirhashemi776.ir/",
        },
        fidibo:{
            id:"fidibo",
            title:"Fidibo Clone",
            text:"This project is a clone of the Fidibo website, Fidibo is an online book store, and I tried to implement the front-end part of this website responsively.",
            technologies:['React','ReactRouter','Redux/ReduxTolkit','Tailwind'],
            linkName:'FidiboClone',
            githubUrl:"https://github.com/AmirHashemi77/fidibo",
            cloneUrl:"https://fidibo.amirhashemi776.ir/",
        },
    
    }
    return (
        <div className={style.container}>
            <h2 className={style.title}>{projectData[activeProject].title}</h2>
            <div className={style.textContainer}>
                <p className={style.text}>{projectData[activeProject].text}</p>
            <p className={style.text}> This project has been implemented using the following technologies: </p>
            <ul>
               {projectData[activeProject].technologies.map((item)=>{
                return <li>{item}</li>
               })}
            </ul>
                
               
                
                
            </div>
            <div className={style.links}>
                <a href={projectData[activeProject].githubUrl}>Source Code</a>
                <a href={projectData[activeProject].cloneUrl}>{projectData[activeProject].linkName}</a>
            </div>
        </div>
    );
};

export default ProjectDetails;