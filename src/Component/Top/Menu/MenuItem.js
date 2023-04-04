import React, { useContext } from 'react';
import style from "./menuItem.module.css";
import { ReactComponent as PersonIcon } from './person.svg';
import { ReactComponent as BulbIcon } from './bulb.svg';
import { ReactComponent as ProjectIcon } from './projectIcon.svg';
import { Context } from '../../../Context/Context';
const MenuItem = ({title,type}) => {
   const {activeItem,setActiveItem}=useContext(Context)
    
   const ActiveMenuHandel=()=>{
       setActiveItem(type)
   }
       
    

    return (
        <div onClick={ActiveMenuHandel} className={style.container}>
            <div className={style.logo}>
              {type==="about" && <PersonIcon/>} 
              {type==="skill" && <BulbIcon/>} 
              {type==="project" && <ProjectIcon/>} 

            
            </div>
            <h4 className={style.title}>{title}</h4>
        </div>
    );
};

export default MenuItem;