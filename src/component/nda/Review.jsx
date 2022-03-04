import React from 'react'
import Carousel from 'react-elastic-carousel';
import style from './nda.module.css';
import Pratiksha from './card/review/Pratiksha';
import Amarjeet from './card/review/Amarjeet';
import Rencho from './card/review/Rencho';
import Himanshi from './card/review/Himanshi';
import Learningapp from './Learningapp';



function Review() {
    let items =
    [
        {
            id: 1,
            Profile_1: <Pratiksha/>,
        },
        {
            id: 2,
            Profile_1: <Amarjeet/>,
        },
        {
            id: 3,
            Profile_1: <Rencho/>,
        },
        {
            id: 4,
            Profile_1: <Himanshi/>
        }
    ]    
    return (
      <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>What our learners say about Plus</h2>  
            </div>    
        </div>    
        <Carousel>
                {items.map(item =>
                   <div key={item.id}>
                        <div className={style.carousel}>
                            <div> {item.Profile_1}</div> 
                        </div>
                    </div>       
                )}
        </Carousel>
        </div>
        <Learningapp/>    
       </>     
    )
}
export default Review;