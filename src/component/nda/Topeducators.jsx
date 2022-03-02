import React from 'react'
import Carousel from 'react-elastic-carousel';
import Batches from './Batches';
import Anish from './card/Anish';
import Anuj from './card/Anuj';
import Arpit from './card/Arpit';
import Shwetha from './card/Shwetha';
import Shyam from './card/Shyam';
import Sumit from './card/Sumit';
import style from './nda.module.css'

function Topeducators() {
    let items =
    [
        {
            id: 1,
            Profile_1: <Sumit/>,
            Profile_2: <Shyam/>
        },
        {
            id: 1,
            Profile_1: <Arpit/>,
            Profile_2: <Anuj/>
        },
        {
            id: 1,
            Profile_1: <Anish/>,
            Profile_2: <Shwetha/>
        }
    ]    
    return (
      <>
      <div className={style.cursol}>
        <Carousel>
                {items.map(item =>
                    <div className={style.carousel}>
                        <div> {item.Profile_1}</div> 
                        <div> {item.Profile_2}</div> 
                    </div>
                )}
        </Carousel>
        </div>
        <Batches/>    
       </>     
    )
}
export default Topeducators