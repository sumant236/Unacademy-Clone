import React from 'react'
import Carousel from 'react-elastic-carousel';
import style from './nda.module.css';
import { Link } from 'react-router-dom';
import AgastyabySunny from './card/startedcourse/AgastyabySunny';
import Agstya from './card/startedcourse/Agstya';
import Biologybyreshma from './card/startedcourse/Biologybyreshma';
import Geographybymayank from './card/startedcourse/Geographybymayank';
import Nightingale from './card/startedcourse/Nightingale';
import Super from './card/startedcourse/Super';
import Alltime from './Alltime';


function Startedcourse() {
    let items =
    [
        {
            id: 1,
            Profile_1: <AgastyabySunny/>,
            Profile_2: <Agstya/>
        },
        {
            id: 2,
            Profile_1: <Biologybyreshma/>,
            Profile_2: <Geographybymayank/>
        },
        {
            id: 3,
            Profile_1:<Nightingale/>,
            Profile_2: <Super/>
        }
    ]    
    return (
      <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>Recently started courses</h2>  
                <p>Start learning live from the best of our ongoing courses</p>      
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
        <Alltime/>    
       </>     
    )
}
export default Startedcourse;