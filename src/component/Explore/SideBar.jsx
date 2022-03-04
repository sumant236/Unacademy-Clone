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

// export const SideBar = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         getData()
//         .then((res)=>{
//             setData(res.data)
//             // console.log(res.data)
//         })
//         .catch((err)=> console.log(err));
//     }, []);
//   return (
//     <div className={style.sideBar}>
//         {data.map((item)=> (
//             <div className={style.titleList}>{item.title}</div>
//         ))}
//     </div>
//   )
// }
