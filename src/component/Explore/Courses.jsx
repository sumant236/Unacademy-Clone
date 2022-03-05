import React, { useEffect, useState } from 'react'
import axios from "axios";
import style from "./Explore.module.css"

export const Courses = ({lists}) => {
    return (
    <div>
        {
            lists.map((item)=>(
                <div className={style.box}>
                    <h5>{item.title}</h5> 
                    <div className={style.boxes}>
                        {item.subTitles.map((data)=>(
                            <div className={style.course} key={data.id}>
                                <img className={style.imgStyle} src={data.iconsUrl}/>
                                <p>{data.topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))
        }
    </div>
  )
}