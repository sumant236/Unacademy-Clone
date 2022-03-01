import React from 'react'
import style from './card.module.css'

function Sumit() {
  return (
    <div className = {style.sumit}>
        <img src='https://edge.uacdn.net/static/thumbnail/user/c876c5e6a9fa407e85ab125e7e38f8a9.jpg?q=75&w=1000&fm=webp' alt='_Sumit_img'/>
        <div>
            <h1>Sumit Kumar</h1> 
            <p>Learn With Sumit You tube channel,<br/>
                Guided above 108k+ Thousands for<br />
                NDA, CDS and AirforceX & Y. <br />
                Teaches Geo, Polity, History, Eco and <br /> 
                CA. 
            </p> 
            <p>Teaches General Awareness and 39 more</p>  
        </div> 
    </div>
  )
}

export default Sumit