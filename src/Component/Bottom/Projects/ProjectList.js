import React from 'react';
import style from './projectList.module.css';
const ProjectList = ({setActiveProject,activeProject}) => {
    return (
        <div className={style.container}>
            <div className={style.projectItemButton} onClick={()=>setActiveProject('snappfood')}>
                <img src="/images/projectLogo/snappfoodLogo.png" alt="snappfood" className={`${style.snappfood} ${activeProject==='snappfood' ? style.active : null}`}/>
            </div>
            <div className={style.projectItemButton} onClick={()=>setActiveProject('fidibo')}>
                <img src="/images/projectLogo/fidibo-logo.png" alt="fidibo" className={`${style.fidibo} ${activeProject==='fidibo' ? style.active : null}`}/>
            </div>
        </div>
    );
};

export default ProjectList;