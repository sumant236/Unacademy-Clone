import React, { useState, createContext } from 'react'


export const AuthContext = createContext();

export default function AuthProvider({children}) {

    const [value1, setvalue1] = useState({dur:24,price:12000})
    const [value2, setvalue2] = useState({dur:12,price:10000})
    const [value3, setvalue3] = useState({dur:6,price:8000})

    const [value4, setvalue4] = useState({dur:24,price:14000})
    const [value5, setvalue5] = useState({dur:12,price:12000})
    const [value6, setvalue6] = useState({dur:6,price:8000})

   const [sender, setSender] = useState({})
   const [con, setCon] = useState(false);
   
  return (
    <AuthContext.Provider value={{value1,value2,value3,value4,value5,value6,sender,con, setvalue1,setvalue2,setvalue3,setvalue4,setvalue5,setvalue6,setSender,setCon }}>
          {children}
    </AuthContext.Provider>
  )
}