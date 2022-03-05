import React from 'react'
import Carousel from 'react-elastic-carousel';
import {Link} from 'react-router-dom'
import Sankalpbydheeraj from './card/alltime/Sankalpbydheeraj';
import Sankalpbypurlove from './card/alltime/Sankalpbypurlove';
import Sankalpbyradhika from './card/alltime/Sankalpbyradhika';
import Sankalpbysunil from './card/alltime/Sankalpbysunil';
import style from './nda.module.css'
import Syllabus from './Syllabus';

function Alltime() {
    let items =
    [
        {
            id: 1,
            Profile_1: <Sankalpbydheeraj/>,
            Profile_2: <Sankalpbypurlove/>
        },
        {
            id: 2,
            Profile_1: <Sankalpbyradhika/>,
            Profile_2: <Sankalpbysunil/>
        }
    ]    
    return (
        <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>Best of all time</h2>  
                <p>Get unlimited access to popular past NDA courses from our top educators</p>      
            </div>  
            <Link to='' className={style.view_sub}>See all</Link>        
        </div>        
        <Carousel>
                {items.map(item =>
                    <div key={item.id}>
                    <div className={style.carousel}>
                        <div> {item.Profile_1}</div> 
                        <div> {item.Profile_2}</div> 
                    </div>
                    </div>    
                )}
        </Carousel>
        </div>
         <Syllabus/>
        </>
    )
}
export default Alltime;