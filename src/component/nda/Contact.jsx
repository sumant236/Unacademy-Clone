import React from 'react'
import Footer from './Footer';
import style from './nda.module.css'

function Contact() {
  return (
    <>
    <div className={style.combat} >
        <div>
          <h1> Have questions about the NDA subscription? </h1>
          <p>Our expert can answer your questions</p>
          <button>Talk to our expert</button>   
        </div>  
        <img className={style.combat_left_img} src='https://static.uacdn.net/production/_next/static/images/ttu_illustration.svg?q=75&w=1920' alt='call_expert' />  
    </div>
    <Footer/>  
    </>      
  )
}
export default Contact;