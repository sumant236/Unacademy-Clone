import React from 'react'
import { Link } from 'react-router-dom';
import Class from './Class';
import style from './scrollway.module.css'

function Bestway() {
  return (
    <>
    <div className={style.best_way}>
        <div>
            <h1>The best way to prepare for NDA</h1> 
            <Link to='subscribe' className={style.best_way_link}>Get subscription</Link>  
        </div>  
        <div className={style.example}>
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/schedule_055b9bfa23.webm'/>         
                </video>
                <h1>Schedule that works for you</h1> 
                <p>Enroll in unlimited courses, get a personalised schedule and never miss a live class with our timely reminders</p> 
            </div>  
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/language_d56e370f78.webm'/>         
                </video>
                <h1>No Language barrier</h1> 
                <p>Our educators teach in English, Hindi, Malayalam, Tamil and 12 other languages, so language is never a barrier</p> 
            </div>  
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/practice_2202d81863.webm'/>         
                </video>
                <h1>Learn anytime, anywhere</h1> 
                <p>Watch our recorded classes, online or offline from the comfort of your mobile, PC or tablet</p> 
            </div>    
        </div>    
        </div>
        <Class/>  
    </>          
  )
}

export default Bestway