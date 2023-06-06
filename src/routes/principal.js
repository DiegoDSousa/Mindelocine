import React from "react";
import Navbar from "../components/navbar/navbar";
import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";

const Principal=()=>{
    const[logedIn,setItem]=useState(false)
    const[logedInAdm,setItemAdm]=useState(false)
    
    useEffect(()=>{
        const token=localStorage.getItem('UserToken')
        console.log(token)

        console.log(localStorage)
        if (token !=null){
            const array=token.split("_")
            setItem(true)
            if(array[array.length - 1]===1){
                setItemAdm(true)
            }else{setItemAdm(false)}

        }else{setItem(false)}
        

      },[])

    return (
        <>
        <Navbar login={logedIn} adm={logedInAdm}></Navbar>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    )
}
export default Principal