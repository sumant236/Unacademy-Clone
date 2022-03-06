import React from 'react';
import Carousel from 'react-elastic-carousel';
import Combatnda from './card/batches/Combatnda';
import Super30 from './card/batches/Super30';
import Vajara from './card/batches/Vajara';
import Vijaypath from './card/batches/Vijaypath';
import style from './nda.module.css'
import {Link} from 'react-router-dom'
import Startedsoon from './Startedsoon';
import { border, color } from '@mui/system';
function Batches() {
    let items =
    [
        {
            id: 1,
            Profile_1: <Vajara/>,
            Profile_2: <Combatnda/>
        },
        {
            id: 2,
            Profile_1: <Super30/>,
            Profile_2: <Vijaypath/>
        }
    ]    
    return (
        <>
        <div className={style.cursol}>
        <div className={style.top_educator}>
            <div>
                <h2>Batches for syllabus completion</h2>  
                <p>Boost your NDA exam preparation with extensive courses by the best educators</p>      
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
        <Startedsoon/>
        </>
    )
}
export default Batches;