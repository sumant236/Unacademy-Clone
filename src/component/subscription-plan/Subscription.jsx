import React from 'react';
import style from "./Subscription.module.css";

export const Subscription = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.heading}>      
          <h3 className={style.ndaheading}>NDA</h3>
          <h5 className={style.ndatagline}>Select a subscription plan that suits you</h5>
        </div>
        
        <div className={style.plandetails}>
          <div className={style.plus}>
            <div className={style.head}>
              <div className={style.headtagline}>
                <h2>PLUS</h2>
                <p>Basic plan to get you started</p>
              </div>
              <div className={style.logo}>
                <img src='https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Plus_icon_9029cac986.png' alt="-"/>
              </div>
            </div>
            <div className={style.content}>
              
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>India's best educators</h5>
              </div>
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>Interactive live classes</h5>
              </div>
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>Structured courses & PDFs</h5>
              </div>
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>Live tests & quizzes</h5>
              </div>
              
            </div>
            <div className={style.plusbutton}>
              <button>
                Select PLUS
              </button>
            </div>
          </div>


          <div className={style.iconic}>
            <div className={style.head}>
                <div className={style.headtagline}>
                  <h2>ICONIC</h2>
                  <p>Take your exam preparation to next level with your ICONIC subscription</p>
                </div>
                <div className={style.logo}>
                  <img src='https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Group_4894_2b74e644b9.png' alt="-"/>
                </div>
              </div>
              <div className={style.content}>
                
                <div className={style.check}>
                    <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                    <h5>India's best educators</h5>
                </div>
                <div className={style.check}>
                    <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                    <h5>Interactive live classes</h5>
                </div>
                <div className={style.check}>
                    <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                    <h5>Structured courses & PDFs</h5>
                </div>
                <div className={style.check}>
                    <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                    <h5>Live tests & quizzes</h5>
                </div>
                <div className={style.check}>
                    <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                    <h5>Structured courses & PDFs</h5>
                </div>
                <div className={style.check}>
                    <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                    <h5>Live tests & quizzes</h5>
                </div>

                
              </div>
              <div className={style.iconicbutton}>
                <button>
                  Select ICONIC
                </button>
                <button>
                  Learn more
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
