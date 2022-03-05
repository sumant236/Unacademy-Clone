import React from 'react'
import { ChooseYourGoal } from './ChooseYourGoal'
import { Courses } from './Courses'
import { SideBar } from './SideBar'
import style from "./Explore.module.css"

export const ExplorePage = () => {
  return (
    <div>
        <ChooseYourGoal />
        <div className={style.topics}>
          <SideBar />
          <Courses />
        </div>
    </div>
  )
}