import "./navbar.css"
import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
function Navbar(props){
    const[clicked,setClicked]=useState(false)
    const clickControler=()=>{setClicked(!clicked);console.log(clicked)}
    const navigate = useNavigate()
    
    return(
        <div>
            <nav>
                <p  className="a"><p>MindelCine</p></p>
                <div>
                    <ul id="navbar-controler" className={clicked?".navbar-controler active":".navbar-controler"}>
                        <li><p className="a" onClick={()=>navigate("/")}>Home</p></li>
                        <li><p  className="a" onClick={()=>navigate("/about")}>About</p></li>
                        <li><p  className="a" onClick={()=>navigate("/contact")}>Contact</p></li>
                        <li><p  className="a" onClick={()=>navigate("/adicionar")}>Adicionar</p></li>
                        <li><p  className="a" onClick={()=>navigate(props.login?"/perfil":"/login")}>{props.login?"Perfil":"LogIn"}</p></li>
                    </ul>
                    <div id="mobile" onClick={clickControler}>
                            <i className={clicked?"fas fa-times":"fas fa-bars"}></i>
                        </div>
                </div>
                
            </nav>
        </div>
    )
}
export default Navbar