import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { ModalPage } from '../Login/ModalPage';
import { Courses } from './Courses';
import style from './Explore.module.css'
import { SideBar } from './SideBar';

const getData = (val) =>{
  const config = {
      url: `https://unacadmey.herokuapp.com/Explore?q=${val}`,
      method: "get"
  }
  return axios(config);
}

const handleData = (val, setList) => {
  getData(val)
  .then((res)=>{
    console.log(res.data)
    setList(res.data)
  })
  .catch((err)=> console.log(err));
}

export const ChooseYourGoal = () => {
  const [list, setList] = useState([]);
  const [val, setVal] = useState("");
  const handleChange= (e) => {
    setVal(e.currentTarget.value);
    // handleData(val, setVal);
  }
  useEffect(() => {
      handleData(val, setList)    
  }, [handleChange]);
  return (
    <div>
      <div className={style.inputContainer}>
        <ModalPage />
        <div className={style.searchBox}>
            <h1 className={style.h1Tag}>Choose your goal</h1>
            <div className={style.inputDiv}>
              <div className={style.icon}><label><IoSearchOutline size = "20px" color='#3C4852'/></label></div>
              <div className={style.searchInput}><input type="text" placeholder= "Search for your goal" onChange={handleChange} className={style.inputBox}></input></div>
            </div>
        </div>
      </div>
      <div className={style.topics}>
          <SideBar lists={list}/>
          <Courses lists={list}/>
      </div>
    </div>
  )
}
