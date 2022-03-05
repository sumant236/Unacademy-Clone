import React from 'react'
import Carousel from 'react-elastic-carousel';
import style from './nda.module.css';
import { Link } from 'react-router-dom';
import Test1 from './card/preparation/Test1';
import Test2 from './card/preparation/Test2';
import Test3 from './card/preparation/Test3';
import Test4 from './card/preparation/Test4';
import Test5 from './card/preparation/Test5';
import Test6 from './card/preparation/Test6';
import Bestway from './Bestway';


function Preparation() {
    let items =
    [
        {
            id: 1,
            Profile_1: <Test1/>,
            Profile_2: <Test2/>
        },
        {
            id: 2,
            Profile_1: <Test3/>,
            Profile_2: <Test4/>
        },
        {
            id: 3,
            Profile_1: <Test5/>,
            Profile_2: <Test6/>
        }
    ]    
    return (
      <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>Track your preparation</h2>  
                <p>Evaluate your progress with our NDA Mock Tests and detailed results analysis</p>      
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
        <Bestway/>    
       </>     
    )
}
export default Preparation