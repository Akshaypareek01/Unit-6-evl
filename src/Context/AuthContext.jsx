import React from 'react'
import { useState,createContext } from 'react';
import { Navigate } from 'react-router-dom';


export const AuthContext=createContext();

export const AuthContextProvider = ({children}) => {
    const[isAuth,setIsAuth]=useState(false);

    const handelLogin=()=> setIsAuth(true)

    const handelLogout=()=> setIsAuth(false);

    const [Data, setData] = useState([])

    const [Data2, setData2] = useState([])
    const [currProduct, setCurrProduct] = useState({});

    const getData=async()=>{
      try{
        const api_url=`http://localhost:8080/movies`
         const res=await fetch(api_url)
         const data=await res.json()
         setData(data)
         return data;
        
      }
      catch(err){
              console.log("err=>",err)
      }
     }

     const getData2=async()=>{
      try{
        const api_url=`http://localhost:8080/moviesBooked`
         const res=await fetch(api_url)
         const data=await res.json()
         setData2(data)
         return data;
        
      }
      catch(err){
              console.log("err=>",err)
      }
     }

     const handlecurrProduct = (item) => {
      setCurrProduct(item)
  }
    
  return (
    <AuthContext.Provider value={{isAuth,handelLogin,handelLogout,getData,Data,handlecurrProduct,currProduct,getData2,Data2}}>{children}</AuthContext.Provider>
  )
}
