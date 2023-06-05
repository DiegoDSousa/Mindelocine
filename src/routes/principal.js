import React from "react";
import Navbar from "../components/navbar/navbar";
import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";

const Principal=()=>{
    const[logedIn,setItem]=useState()

    useEffect(()=>{
        const token=localStorage.getItem('UserToken')
        //console.log(JSON.stringify(localStorage.getItem('id')))
        console.log(token)
        console.log(localStorage)
        if (token !=null){
            setItem(true)
        }
        console.log(logedIn)
      },)

    return (
        <>
        <Navbar login={logedIn}></Navbar>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    )
}
export default Principal