import React from 'react'
import style from './nda.module.css'
import { Link } from 'react-router-dom';
import Introduction from './Introduction';
import Navbar2 from '../Navbar2/Navbar2';

function Page() {
  return (
    <div>
        <Navbar2/>
        <div className={style.wrapper}>
            <img src='https://static.uacdn.net/production/_next/static/images/goal/boy.svg?q=75&w=384' alt='left_img' /> 
            <div className={style.wrapper_content}>
                <h1>Crack NDA with India's largest learning platform</h1>
                <p>Get Plus subscription and access unlimited live and recorded courses from India's best educators</p> 
                <Link to='subscribe'><button> Get subscription</button></Link>
                <div className={style.discount_logo}>
                 <img src='	https://static.uacdn.net/production/_next/static/images/discount-green.svg?q=75&w=48' alt='discount'/> 
                <Link to='' className={style.view_sub}>View subscription offers</Link>
                </div>
                <p>Get upto 6 months free with your subscription</p>
            </div>  
            <img  src='https://static.uacdn.net/production/_next/static/images/goal/girl.svg?q=75&w=384' alt='right_img'/>  
      </div>   
      <Introduction/>
    </div>
  )
}
export default Page

// I have removed two class from image