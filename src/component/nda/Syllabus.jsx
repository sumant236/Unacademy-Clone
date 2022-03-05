import React from 'react'
import Carousel from 'react-elastic-carousel';
import style from './nda.module.css';
import { Link } from 'react-router-dom';
import English from './card/syllabus/English';
import Geography from './card/syllabus/Geography';
import Math from './card/syllabus/Math';
import Nda from './card/syllabus/Nda';
import Reson from './card/syllabus/Reson';
import Science from './card/syllabus/Science';
import Preparation from './Preparation';

function Syllabus() {
    let items =
    [
        {
            id: 1,
            Profile_1: <English/>,
            Profile_2: <Geography/>
        },
        {
            id: 2,
            Profile_1: <Math/>,
            Profile_2: <Nda/>
        },
        {
            id: 3,
            Profile_1: <Reson/>,
            Profile_2: <Science/>
        }
    ]    
    return (
      <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>Comprehensive syllabus</h2>  
                <p>Our courses provide complete coverage of the topics you need to be prepared for</p>      
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
        <Preparation/>    
       </>     
    )
}
export default Syllabus;