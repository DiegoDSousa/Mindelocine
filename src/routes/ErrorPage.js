import React from "react";
import "./mainAbaut.css"
import ErrorIcon from "../Icones/error";
import { useNavigate } from "react-router-dom"
import Error from "../components/erro/erro";
const ErrorPage=()=>{
    const navigate = useNavigate()
    return (
        <div className="main">  
            <Error></Error>
        </div>
        
    )
}
export default ErrorPage