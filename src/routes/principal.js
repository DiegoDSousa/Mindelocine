import React from "react";
import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

const Principal=()=>{
    return (
        <>
        <Navbar></Navbar>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    )
}
export default Principal