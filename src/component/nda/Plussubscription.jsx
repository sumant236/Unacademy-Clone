import React from 'react'
import { Link } from 'react-router-dom';
import Liveclasses from './Liveclasses';
import style from './nda.module.css'

function Plussubscription() {
  return (
    <div>
        <div className={style.introduction}>     
        <h3>Plus subscription</h3>  
        <p>Your access to the best of Unacademy</p>  
        </div>     
        <div className={style.introduction_icon}>
            <div className={style.introduction_icon}>
                <img src='https://static.uacdn.net/web-cms/benefitchat_1b0a84e281.svg?q=75&w=96&fm=webp' alt='_icon' />
                <span>
                    <h2>Daily live classes</h2>   
                    <p>Chat with your educator, engage in <br/> 
                        discussions, ask your doubts, and answer<br/> 
                       polls - all while the class is going on
                    </p>  
                </span>  
            </div>
            <div className={style.introduction_icon}>
                <img src='https://static.uacdn.net/web-cms/benefittest_d542d8446b.svg?q=75&w=96&fm=webp' alt='_icon' />
                <span>
                    <h2>Live tests & quizzes</h2>   
                    <p>
                        Evaluate your preparation with our regular <br/>
                        mock tests and quizzes and get detailed <br/>
                        analysis on your performance
                    </p>  
                </span>    
            </div>            
        </div>
        <div className={style.introduction_icon}>
            <div className={style.introduction_icon}>
               <img src='https://static.uacdn.net/web-cms/benefitcourses_cceb8214b5.svg?q=75&w=96&fm=webp' alt='_icon' />
                <span>
                    <h2>Structured courses</h2>   
                      <p>All our courses are structured in line with <br/>
                          your exam syllabus to help you best <br/>
                          prepare for it
                    </p>  
                </span>          
            </div>
            <div className={style.introduction_icon}>
                <img src='https://static.uacdn.net/web-cms/benefitaccess_9a0fb1469f.svg?q=75&w=96&fm=webp' alt='_icon' />
                <span>
                    <h2>Unlimited access</h2>   
                    <p> One subscription gets you access to all our<br />
                        live and recorded courses to watch from <br />
                        the comfort of any of your devices
                    </p>  
                </span>          
            </div>            
        </div>  
        <hr></hr>  
        <div className={style.introduction_icon}>
            <div>
                <h3>NDA - PLUS subscription starts<br/>
                    from ₹506/month
                </h3>
            </div>
            <div>
                <Link to=''>View pricing</Link>
            </div>            
        </div>   
        <Liveclasses/>  
    </div>
  )
}

export default Plussubscription