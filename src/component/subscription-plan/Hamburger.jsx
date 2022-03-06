import React from 'react'
import style from "./hamburger.module.css"

export const Hamburger = () => {
  return (
      <>
        <div className={style.wrap}>

            <div className={style.hamHead}>
                <h2>ICONIC subscription</h2>
                <p>Take your exam preparation to next level with your ICONIC subscription</p>
            </div>

            <div className={style.benefits}>
                <div className={style.card}>
                    <div className={style.hamImg1}>
                        <img src='https://static.uacdn.net/web-cms/Live_Doubt_solving_80b01abcbd.svg?q=75&w=64&fm=webp'/>
                    </div>
                    <div className={style.hamDetails}>
                        <p className={style.p1}>Priority Doubt Solving</p>
                        <p className={style.p2}>Get a quick resolution of doubts even after your Live Classes with our experts on ‘Ask a doubt’ feature</p>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.hamImg2}>
                        <img src='https://static.uacdn.net/web-cms/session_iconic_f68ddabeda.png'/>
                    </div>
                    <div className={style.hamDetails}>
                        <p className={style.p1}>Priority in Live classes</p>
                        <p className={style.p2}>Get priority in live classes to ask questions to educators using the Raise a Hand Feature</p>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.hamImg3}>
                        <img src='https://static.uacdn.net/web-cms/Group_3469_db56823e09.png'/>
                    </div>
                    <div>
                        <p className={style.p1}>All benefits of PLUS</p>
                        <p className={style.p2}>Live classes from top educators, mock tests & quizzes, structured batch courses in line with exam syllabus</p>
                    </div>
                </div>
            </div>
        </div>
      
      </>
    

  )
}
