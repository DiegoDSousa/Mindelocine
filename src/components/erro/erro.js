import React from "react";
import "./erro.css"
import { useNavigate } from "react-router-dom"

const Error=()=>{
    const navigate = useNavigate()
    return (
        <div className="error_page">
            <div className="main_container">
            <h1 className="error_type">404</h1>
            <p className="error_message">Ops</p>
            <p className="error_description">Não foi possivel localizar a pagina solicitada</p>
            <p className="error_solution">Voltar para <a clasName="return" onClick={()=>navigate("/")}>Home</a></p>
            
        </div>
        </div>
        
        
    )
}
export default Error