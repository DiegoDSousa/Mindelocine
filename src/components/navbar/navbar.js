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
                <a href="#" className="logo"><p>MindelCine</p></a>
                <div>
                    <ul id="navbar-controler" className={clicked?".navbar-controler active":".navbar-controler"}>
                        <li><a onClick={()=>navigate("/")}>Home</a></li>
                        <li><a onClick={()=>navigate("/about")}>About</a></li>
                        <li><a onClick={()=>navigate("/contact")}>Contact</a></li>
                        <li><a onClick={()=>navigate(props.adm?"/adicionar":"")}>{props.adm?"Adicionar":""}</a></li>
                        <li><a onClick={()=>navigate(props.login?"/perfil":"/login")}>{props.login?"Perfil":"LogIn"}</a></li>
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