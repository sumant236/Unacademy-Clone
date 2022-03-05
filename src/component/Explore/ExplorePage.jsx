import React, { useState } from 'react'
import { ChooseYourGoal } from './ChooseYourGoal'
import { Courses } from './Courses'
import { SideBar } from './SideBar'
import style from "./Explore.module.css"
import { Navbar } from '../Navbar/Navbar'

export const ExplorePage = () => {
  const [value, setValue] = useState([]);

  return (
    <div>
        <ChooseYourGoal />
    </div>
  )
}
