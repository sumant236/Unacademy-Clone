import React from 'react'
import Carousel from 'react-elastic-carousel';
import Batches from './Batches';
import Anish from './card/Anish';
import Anuj from './card/Anuj';
import Arpit from './card/Arpit';
import Shwetha from './card/Shwetha';
import Shyam from './card/Shyam';
import Sumit from './card/Sumit';
import style from './nda.module.css';
import { Link } from 'react-router-dom';

function Topeducators() {
    let items =
    [
        {
            id: 1,
            Profile_1: <Sumit/>,
            Profile_2: <Shyam/>
        },
        {
            id: 2,
            Profile_1: <Arpit/>,
            Profile_2: <Anuj/>
        },
        {
            id: 3,
            Profile_1: <Anish/>,
            Profile_2: <Shwetha/>
        }
    ]    
    return (
      <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>Prepare with Top Educators</h2>  
                <p>Access to India's best NDA educators is just a subscription away</p>      
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
        <Batches/>    
       </>     
    )
}
export default Topeducators