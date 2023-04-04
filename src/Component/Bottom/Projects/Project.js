import React, { useState } from 'react';
import style from './project.module.css';
import ProjectDetails from './ProjectDetails';
import ProjectList from './ProjectList';
const Project = () => {
    const [activeProject,setActiveProject]=useState('snappfood')
   
    return (
        <div className={style.container}>
            <ProjectList setActiveProject={setActiveProject} activeProject={activeProject}/>
            {activeProject==="snappfood" && <ProjectDetails activeProject={activeProject} setActiveProject={setActiveProject} />}
            {activeProject==="fidibo" &&  <ProjectDetails activeProject={activeProject} setActiveProject={setActiveProject} />}
           
        </div>
    );
};

export default Project;