import React from 'react'
import Carousel from 'react-elastic-carousel';
import style from './nda.module.css';
import { Link } from 'react-router-dom';
import Biologybypurlove from './card/startedsoon/Biologybypurlove';
import Currentbysunny from './card/startedsoon/Currentbysunny';
import Englishbyanish from './card/startedsoon/Englishbyanish';
import Mathbyanuj from './card/startedsoon/Mathbyanuj';
import Physicsbyshyam from './card/startedsoon/Physicsbyshyam';
import Politybysumit from './card/startedsoon/Politybysumit';
import Startedcourse from './Startedcourse';

function Startedsoon() {
    let items =
    [
        {
            id: 1,
            Profile_1: <Biologybypurlove/>,
            Profile_2: <Currentbysunny/>
        },
        {
            id: 2,
            Profile_1: <Englishbyanish />,
            Profile_2: <Mathbyanuj/>
        },
        {
            id: 3,
            Profile_1:<Physicsbyshyam/>,
            Profile_2: <Politybysumit/>
        }
    ]    
    return (
      <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>Courses starting soon</h2>  
                <p>Enroll in upcoming courses that best suit your schedule and NDA exam syllabus</p>      
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
        <Startedcourse/>    
       </>     
    )
}
export default Startedsoon