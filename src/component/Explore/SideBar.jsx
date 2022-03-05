// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import style from "./Explore.module.css"

<<<<<<< HEAD
export const SideBar = ({lists}) => {
  return (
    <div className={style.sideBar}>
        {lists.map((item)=> (
            <div className={style.titleList}>{item.title}</div>
        ))}
    </div>
  )
}
=======
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
>>>>>>> 0b758c7441a700443e1d291ab033840cd818f45d
