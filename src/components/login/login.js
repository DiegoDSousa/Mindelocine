import "./cadastro.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login(){

    const[userdata,setuserData]=useState({
        nome: "",
        password:"",
    })
    const navigate = useNavigate()
    const handlechanger=(e)=>{
        setuserData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const submithandler=async event=>{
        event.preventDefault()
        console.log(userdata)
        let informations
        let verified_name
        //falta verificacoes
        try{
            informations=(await axios.post("http://localhost:8800/login_verefier",userdata)).data
        }catch(erro){
            console.log(erro)
        }
        if(userdata.password == informations[0].PASSCODE){
            console.log("log in realizado com sucesso")
        }else{console.log("Password incorreta")}
        }


    return(
        <div className='cadastrar-div'>
            <form className="cadastrar-card" onSubmit={submithandler}>
                <div className='titulo'><h2>Login</h2></div>
                <div className="content-controler">
                    <label className="content-description">Nome de Utilizador</label>
                    <input type="text" name="nome"  className="input-controler " onChange={handlechanger}></input>
                </div>
                <div className="content-controler">
                    <label className="content-description">Password</label>
                    <input type="password" name="password" className="input-controler " onChange={handlechanger}></input>
                </div>
                <div className="content-controler">
                <button type="submit" className='cadastrar-button'>Login</button>
                <div className="content-controler-termos">
                    
                <div  className="termos-utilizacao">
                    <p className="termos">Junte-se a familia: </p>
                    <p className="termos-link" ><a onClick={()=>navigate("/cadastro")}>Cadastrar</a></p>
                </div>
            </div>
            </div>
            </form>
        </div>
    )
}
export default Login