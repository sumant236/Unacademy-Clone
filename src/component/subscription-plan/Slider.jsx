import React from 'react'
import Carousel from 'react-elastic-carousel';
import { StructuredCourse,LiveClasses,LiveTests } from './slider-cards/PlusSlider'


export const Slider = () => {

    let items =
    [
        {
            id: 1,
            Profile_1: <StructuredCourse/>,
        },
        {
            id: 2,
            Profile_1: <LiveClasses/>,
        },
        {
            id: 3,
            Profile_1: <LiveTests/>,
        }
    ]    
    return (
      <div>
        <Carousel NextIcon={" "} PrevIcon={" "}>
                {items.map(item =>
                    <div key = {items.id}>
                        <div> {item.Profile_1}</div> 
                    </div>
                )}  
        </Carousel>
      </div>
    )
}
