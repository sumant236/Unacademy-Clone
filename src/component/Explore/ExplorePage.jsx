import React from 'react'
import { ChooseYourGoal } from './ChooseYourGoal'
import { Courses } from './Courses'
import { SideBar } from './SideBar'

export const ExplorePage = () => {
  return (
    <div>
        <ChooseYourGoal />
        <div>
          <SideBar />
          <Courses />
        </div>
    </div>
  )
}
