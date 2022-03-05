import React from 'react'
import { Link } from 'react-router-dom';
import style from './scrollway.module.css'
import Subscription from './Subscription';

function Class() {
  return (
    <>
    <div className={style.best_way}>
        <div>
            <h1>Feels like you are in the classroom</h1> 
            <Link to='subscribe' className={style.best_way_link}>Get subscription</Link>  
        </div>  
        <div className={style.example}>
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/chatting_f25584317b.webm'/>         
                </video>
                <h1>Interact with your educator</h1> 
                <p>Chat with the educator, engage in discussions and ask your questions - all while the class is going on</p> 
            </div>  
            <div>     
                <video loop muted autoPlay playsInline>
                  <source src='https://static.uacdn.net/web-cms/polls_362dafb5eb.webm'/>         
                </video>
                <h1>Answer live polls</h1> 
                <p>Participate in live polls by the educator in class and compete for a place in the leaderboard</p> 
            </div>  
                <div>        
                <video loop muted autoPlay playsInline>
                  <source src=' https://static.uacdn.net/web-cms/question_9baa1f946f.mp4'/>         
                </video>
                <h1>Get your doubts cleared</h1> 
                <p>Ask your doubts and get them answered immediately by the educator during classes</p> 
            </div>    
        </div>    
        </div>
        <Subscription/>  
    </>          
  )
}

export default Class;