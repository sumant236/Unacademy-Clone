import { Link } from '@mui/material'
import React from 'react'
import style from './nda.module.css'
import Topeducators from './Topeducators'

function Liveclasses() {
    return (
    <>
    <div className={style.Liveclasses_shedule}>
        <div className={style.free_live_class}>
            <button>FREE</button> 
            <h3>Live Classes</h3>  
            <p>Experience Plus for free and start<br />
                learning from the best
            </p>
            <Link to='' className={style.see_all} >See all</Link>  
        </div>
        <div>
            <div className={style.practice_arpit}>
                <img src='https://edge.uacdn.net/static/thumbnail/course/0aad8df24d39426abafa307d08c47720.jpg?q=75&w=1000&fm=webp' alt='_thumbnail'/>  
                <div>
                    <h5>Practice Question</h5>    
                    <p>Jan 2 2022, 7:45 PM</p> 
                    <p>Arpit Chaudhry</p>  
                </div>  
            </div>
            <div className={style.practice_arpit}>
                <img src='https://edge.uacdn.net/static/thumbnail/course/0aad8df24d39426abafa307d08c47720.jpg?q=75&w=1000&fm=webp' alt='_thumbnail' />  
                <div>
                    <h5>Practice Question</h5>    
                    <p>Jan 2 2022, 7:45 PM</p> 
                    <p>Arpit Chaudhry</p>  
                </div>        
            </div>
            <div className={style.practice_arpit}>
                <img src='https://edge.uacdn.net/static/thumbnail/course/0aad8df24d39426abafa307d08c47720.jpg?q=75&w=1000&fm=webp' alt='_thumbnail' />  
                <div>
                    <h5>Practice Question</h5>    
                    <p>Jan 2 2022, 7:45 PM</p> 
                    <p>Arpit Chaudhry</p>  
                </div>        
            </div>
            <div className={style.practice_arpit}>
                <img src='https://edge.uacdn.net/static/thumbnail/course/78380f4b3e02467b877b6f2b220cde3e.png?q=100&w=512' alt='_thumbnail' />  
                <div>
                    <h5>Practice Question</h5>    
                    <p>Jan 2 2022, 7:45 PM</p> 
                    <p>Mayank Chahuturvedi</p>  
                </div>        
            </div>
        </div>  
        </div> 
        <Topeducators/>
    </>       
  )
}

export default Liveclasses