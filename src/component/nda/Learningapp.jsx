import React from 'react'
import Contact from './Contact'
import style from './nda.module.css'
function Learningapp() {
  return (
    <>
      <div className={style.Learningapp}>
          <div>
            <h1>Get the learning app</h1>  
            <p>Download lessons and learn anytime, anywhere with the Unacademy app</p>    
            <div className={style.Learningapp}>
              <img className={style.img_apple} src='https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920' alt='apple'/>  
              <img className={style.img_apple} src='https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920' alt='google'/>           
            </div>      
          </div>
          <img className={style.Learningapp_img} src='https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640' alt='reviow_of_app'/>
      </div>
      <Contact/>  
    </>          
  )
}
export default Learningapp