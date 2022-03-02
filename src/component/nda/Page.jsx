import React from 'react'
import style from './nda.module.css'

function Page() {
  return (
    <div>
        <div className={style.wrapper}>
            <img src='https://static.uacdn.net/production/_next/static/images/goal/boy.svg?q=75&w=384' alt='left_img' /> 
            <div>
                <h1>Crack NDA with India's largest learning platform</h1>
                <p>Get Plus subscription and access unlimited live and recorded courses from India's best educators</p>  
            </div>  
            <img src='https://static.uacdn.net/production/_next/static/images/goal/girl.svg?q=75&w=384' alt='right_img'/>  
        </div>      
    </div>
  )
}

export default Page