import React, { useEffect, useState } from 'react'
import axios from "axios";
import style from "./Explore.module.css"
import { Link } from 'react-router-dom';

export const Courses = ({lists}) => {
    return (
    <div>
        {
            lists.map((item)=>(
                <div className={style.box}>
                        <h5 className={style.h5Tag}>{item.title}</h5> 
                        <div className={style.boxes}>
                            {item.subTitles.map((data)=>(
                                    <Link to='nda' className={style.linkP}> 
                                <div className={style.course} key={data.id}>
                                        <img className={style.imgStyle} src={data.iconsUrl}/>
                                        <p>{data.topic}</p>
                                </div>
                                    </Link>
                            ))}
                        </div>
                </div>
            ))
        }
    </div>
  )
}