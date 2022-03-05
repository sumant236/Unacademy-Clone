import React from 'react'
import { Link } from 'react-router-dom';
import Combat from './Combat';
import style from './nda.module.css'

function Introduction() {
    return (
    <>
    <div className={style.intro}>
        <div className={style.introduction}>     
        <button>INTRODUCING</button>   
        <h3>ICONIC subscription</h3>  
        <p>Take your Preparation to next level with your ICONIC subscription</p>  
        </div>       
        <div className={style.introduction_icon}>
            <div className={style.introduction_icon}>
                <img src='https://static.uacdn.net/web-cms/mains_q_a_practice_653a7643b2.png' alt='_icon' />
                <span>
                    <h2>Live Tests and Quizzes</h2>   
                    <p>Evaluate your preparation with our regular 
                        mock tests and quizzes and get detailed  
                        analysis on your performance.
                    </p>  
                </span>  
            </div>
            <div className={style.introduction_icon}>
                <img src='https://static.uacdn.net/web-cms/Asset_645dcf77c3.png' alt='_icon' />
                <span>
                    <h2>Priority Doubt Solving</h2>   
                      <p>Get a quick resolution of doubts even after 
                          your Live Classes with our experts on the  
                          ‘Ask a Doubt’ feature.
                    </p>  
                </span>    
            </div>            
        </div>
        <div className={style.introduction_icon}>
            <div className={style.introduction_icon}>
               <img src='https://static.uacdn.net/web-cms/Asset3_60748205dd.png' alt='_icon' />
                <span>
                    <h2>Priority in Live classes</h2>   
                      <p>Get priority in live classes to ask questions 
                          to educators using the Raise a Hand 
                          Feature.
                    </p>  
                </span>          
            </div>
            <div className={style.introduction_icon}>
                <img src='https://static.uacdn.net/web-cms/Asset4_7d0b0e4c32.png' alt='_icon' />
                <span>
                    <h2>Priority Doubt Solving</h2>   
                      <p> Get a quick resolution of doubts even after 
                          your Live Classes with our experts on the  
                          ‘Ask a Doubt’ feature.
                      </p>  
                </span>          
            </div>            
        </div>  
         <hr/>  
        <div className={style.introduction_icon}>
            <div className={style.plan_607}>
                <h3>NDA - ICONIC subscription starts <br/>
                  from <span>₹607/month </span>
                </h3>
            </div>
            <div>
                <Link to='subscribe' className={style.view_sub}>View pricing</Link>
            </div>            
        </div>  
        </div>
        <Combat/>      
    </>
  )
}

export default Introduction