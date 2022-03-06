import React from 'react'
import { Link } from 'react-router-dom'
import style from './footer.module.css'
function Footer() {
  return (
    <div className={style.footer_css_direction}>
        <div>
            <img src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256' alt='un_academy' />   
            <div className={style.social_icon}>
                <img src='https://cdn-icons-png.flaticon.com/512/59/59439.png' alt='fb' /> 
                <img src='https://cdn-icons-png.flaticon.com/512/152/152810.png' alt='yt' />  
                <img src='https://icons-for-free.com/iconfiles/png/512/tweet+twitter+icon-1320192123388581612.png' alt='twiter' />  
                <img src='https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png' alt='insta' />  
                <img src='https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png' alt='linked_in'/>      
           </div>  
           <Link to='/'  className={style.footer_css_direction_link} >© 2022 @Team Alok Sumant Gursimar Saurabh</Link>
        </div>
        <div>
          <h5>COMPANY</h5>
          <Link to='/' className={style.footer_css_direction_link}>About us</Link><br/>
          <Link to='/' className={style.footer_css_direction_link}>Careers</Link><br/>
          <Link to='/' className={style.footer_css_direction_link}>Blogs</Link><br/>
          <Link to='/' className={style.footer_css_direction_link}>Privacy Policy</Link><br/>
          <Link to='/' className={style.footer_css_direction_link}>Terms and Conditions</Link><br/>
        </div>
        <div>
        <h5>POPULAR GOALS</h5>
        <Link to='/' className={style.footer_css_direction_link}>IIT JEE</Link><br/>
        <Link to='/' className={style.footer_css_direction_link}>UPSC CSE GS</Link><br/>
        <Link to='/' className={style.footer_css_direction_link}>SSC Exams</Link><br/>
        <Link to='/' className={style.footer_css_direction_link}>CBSE Class 12</Link><br/>
        <Link to='/' className={style.footer_css_direction_link}>NEET UG</Link><br/>
        </div>  
        <div>
        <h5>OTHER LINKS</h5>
        <Link to='/' className={style.footer_css_direction_link}>User Guidelines</Link><br/>
        <Link to='/' className={style.footer_css_direction_link}>Site Map</Link><br/>
        <Link to='/' className={style.footer_css_direction_link}>Refund Policy</Link><br/>
        <Link to='/' className={style.footer_css_direction_link}>Takedown Policy</Link><br/>
        </div> 
        <div className={style.learner_app_img}>
        <h5>LEARNER APP</h5>
        <div>
          <img src='https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128' alt='_learner' />
          <img src='https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128' alt='_learner'/>
        </div>
         <h5>EDUCATOR APP</h5>
        <div>
          <img src='https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=128' alt='_learner' />
          <img src='https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=128' alt='_learner'/>
        </div>
        </div>        
    </div>
  )
}

export default Footer