import "./navbar.css"
import React,{useState} from "react"

function Navbar(props){
    const[clicked,setClicked]=useState(false)
    const clickControler=()=>{setClicked(!clicked);console.log(clicked)}
    
    return(
        <div>
            <nav>
                <a href="#" className="logo"><p>MindelCine</p></a>
                <div>
                    <ul id="navbar-controler" className={clicked?".navbar-controler active":".navbar-controler"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Adicionar</a></li>
                        <li><a href="/cadastrar" onClick={props.loginControler}>{props.login?"Cadastrar":"Perfil"}</a></li>
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