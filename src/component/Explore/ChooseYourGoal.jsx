// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { IoSearchOutline } from "react-icons/io5";
// import style from './Explore.module.css'

// const getData = (val) =>{
//   const config = {
//       url: `http://localhost:3000/Explore/title=${val}`,
//       method: "get"
//   }
//   return axios(config);
// }

// export const ChooseYourGoal = () => {
//   const handleChange= (e) => {
//     const val = e.target.value;
//     useEffect(() => {
//       getData(val)
//       .then((res)=>{
//           setCourse(res.data)
//           // console.log(res.data)
//       })
//       .catch((err)=> console.log(err));
//   }, []);
//     // console.log(val);
//   }
//   return (
//     <div className={style.inputContainer}>
//       <div className={style.searchBox}>
//           <h1>Choose your goal</h1>
//           <div className={style.inputDiv}>
//             <div className={style.icon}><label><IoSearchOutline size = "20px" color='#3C4852'/></label></div>
//             <div className={style.searchInput}><input type="text" placeholder= "Search for your goal" onChange={handleChange}></input></div>
//           </div>
//       </div>
//     </div>
//   )
// }
