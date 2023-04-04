import React, { useState } from 'react';
import style from "./app.module.css";
import Top from './Component/Top/Top';
import Bottom from './Component/Bottom/Bottom';
import { Context } from './Context/Context';

const App = () => {
  const [activeItem,setActiveItem]=useState(false)
  
  return (
    <Context.Provider 
    value={{
      activeItem:activeItem,
      setActiveItem:setActiveItem
    }}>

      <div className={style.container}>
        <Top />
        <Bottom/>
      </div>

    </Context.Provider>
  );
};

export default App;