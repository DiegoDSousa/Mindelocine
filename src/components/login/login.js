import "./cadastro.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"
import moment from 'moment'
import { SHA256 } from 'crypto-js';

//import jwt from 'jsonwebtoken';

function Login(){

    const[userToken,setUserToken]=useState()
    const[loginData,setloginData]=useState()
    const[userdata,setuserData]=useState({
        nome: "",
        password:"",
    })
    const navigate = useNavigate()

    const handlechanger=(e)=>{
        setuserData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const submithandler=async event=>{
        const data_atual=moment().format('DD/MM/YYYY')
        event.preventDefault()
        let informations
        let verified_name
        //falta verificacoes
        try{
            userdata.password=SHA256(userdata.password).toString()
            informations=(await axios.post("http://localhost:8800/login_verefier",userdata)).data
            setUserToken(informations[0].ID_USUARIO+"_"+userdata.nome+"_"+data_atual+"_"+informations[0].ADMIN_STATUS)
            console.log(informations)
        }catch(erro){
            console.log(erro)
        }
        if( userdata.password == informations[0].PASSCODE){
            console.log("log in realizado com sucesso")
            console.log(userToken)
            
            localStorage.setItem('UserToken', userToken);
            console.log(localStorage)
            //window.location.href = '/';
        }else{console.log("Password incorreta")}
        }


    return(
        <div className='cadastrar-div'>
            <form className="cadastrar-card" onSubmit={submithandler}>
                <div className='titulo'><h2>Login</h2></div>
                <div className="content-controler">
                    <label className="content-description">Nome de Utilizador</label>
                    <input type="text" name="nome"  className="input-controler " autoComplete="off" onChange={handlechanger}></input>
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