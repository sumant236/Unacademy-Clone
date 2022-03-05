import React, { useEffect, useState } from 'react'
import axios from "axios";
import style from "./Explore.module.css"

export const SideBar = ({lists}) => {
  return (
    <div className={style.sideBar}>
        {lists.map((item)=> (
            <div className={style.titleList}>{item.title}</div>
        ))}
    </div>
  )
}