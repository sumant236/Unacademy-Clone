<<<<<<< HEAD
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
=======
// import React from 'react'
// import { ChooseYourGoal } from './ChooseYourGoal'
// import { Courses } from './Courses'
// import { SideBar } from './SideBar'
// import style from "./Explore.module.css"

// export const ExplorePage = () => {
//   return (
//     <div>
//         <ChooseYourGoal />
//         <div className={style.topics}>
//           <SideBar />
//           <Courses />
//         </div>
//     </div>
//   )
// }
>>>>>>> 0b758c7441a700443e1d291ab033840cd818f45d
