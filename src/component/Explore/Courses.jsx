// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import style from "./Explore.module.css"

// const getData = () =>{
//     const config = {
//         url: "http://localhost:3000/Explore",
//         method: "get"
//     }
//     return axios(config);
// }

// const divKey = (title) =>{

// }

// export const Courses = () => {
//     const [course, setCourse] = useState([]);
//     useEffect(() => {
//         getData()
//         .then((res)=>{
//             setCourse(res.data)
//             console.log(res.data)
//         })
//         .catch((err)=> console.log(err));
//     }, []);
//     course.map((item)=> console.log(item.title))
//   return (
//     <div>
//         {
//             course.map((item)=>(
//                 <div className={style.box}>
//                     <h5>{item.title}</h5> 
//                     <div className={style.boxes}>
//                         {item.subTitles.map((data)=>(
//                             <div className={style.course} key={data.id}>
//                                 <img className={style.imgStyle} src={data.iconsUrl}/>
//                                 <p>{data.topic}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }
