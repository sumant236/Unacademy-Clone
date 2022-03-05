import React from 'react'
import { Link } from 'react-router-dom';
import Ndasubscription from './Ndasubscription';
import style from './scrollway.module.css'

function Subscription() {
  return (
    <>
    <div className={style.best_way}>
        <div>
            <h1>A subscription that's more than just classes</h1> 
            <Link className={style.best_way_link} to=''>Get subscription</Link>  
        </div>  
        <div className={style.example}>
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/testseries_17b34f8aec.webm'/>         
                </video>
                <h1>Live tests and quizzes</h1> 
                <p>Take live mock tests curated in line with the exam pattern to measure your progress, and stay on track</p> 
            </div>  
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/analytics_96e889f457.mp4'/>         
                </video>
                <h1>Detailed report and analysis</h1> 
                <p>Get in-depth insights with topic wise scores, time spent per question and competitive stats</p> 
            </div>  
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/pdf_650d0a3977.webm'/>         
                </video>
                <h1>PDFs and learning material</h1> 
                <p>Get access to class notes with educator annotations for you to revisit and revise anytime</p> 
            </div>    
        </div>    
    </div>
    <Ndasubscription/>  
    </>  
  )
}

export default Subscription;