import './cadastro.css';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SHA256 } from 'crypto-js';



function Cadastro(){
   
    const navigate = useNavigate()
    const[userdata,setuserData]=useState({
        nome: "",
        email: "",
        password:"",
        admin_status:false,
    })

    const [passwordconf,controlPasswordconf]=useState("")
    const [validateUserName,setvalidateUserName]=useState(true)
    const [validateUserEmail,setvalidateUserEmail]=useState(true)
    const [validateUserPassword,setvalidateUserPassword]=useState(true)
    const [validateUserPasswordConf,setvalidateUserPasswordConf]=useState(true)

    const submithandler=async event=>{
        event.preventDefault()


        if(userdata.nome.length!==0 && userdata.email.length!==0 && userdata.password.length!==0 && passwordconf.length!==0){
            if(validateEmail && validateName && validatePassword && validatePasswordConf){
                try{
                    const hasedpassword=SHA256(userdata.password).toString() 
                    userdata.password=hasedpassword
                    console.log((await axios.post("https://08d0-197-255-136-12.ngrok-free.app/cadastro",userdata)).data.message)
                }catch(erro){
                    console.log(erro)
                }}}}


    const validateName=async()=>{
        let verified_name
        const send={"nome":userdata.nome}
        try{
            verified_name = await axios.post("https://08d0-197-255-136-12.ngrok-free.app/cadastro_verificicar_nome",{send})
            console.log(verified_name.data[0])
            
        }catch(err){console.log(err)}
        if(verified_name.data[0]===undefined){
            setvalidateUserName(true)
        }else{
            setvalidateUserName(false)}
    }

    const validateEmail=async()=>{
        let verified_email
        const send={"email":userdata.email}
        try{
            verified_email = await axios.post("https://08d0-197-255-136-12.ngrok-free.app/cadastro_verificicar_email",{send})
            
        }catch(err){console.log(err)}
        if(verified_email.data[0]===undefined){
            setvalidateUserEmail(true)
        }else{
            setvalidateUserEmail(false)}
    }

    const validatePassword=()=>{
        if(userdata.password.length>=8){
            setvalidateUserPassword(true)
        }else{
            setvalidateUserPassword(false)
        }
    }
    const validatePasswordConf=()=>{
        if(passwordconf===userdata.password){
            setvalidateUserPasswordConf(true)
        }else{
            setvalidateUserPasswordConf(false)
        }
    }

    const handlechanger=(e)=>{
        setuserData((prev)=>({...prev,[e.target.name]:e.target.value}))
        
    }

    
    const passwordconfHandler=(event)=>{
        controlPasswordconf(event.target.value)
    }



    return(
        <div className='cadastrar-div'>
            <form className="cadastrar-card" onSubmit={submithandler}>
            <div className='titulo'><h2>Cadastrar</h2></div>
            <div className="content-controler">
                <label className="content-description"><p>Nome Utilizador</p></label>
                <input type="text" className="input-controler " onBlur={validateName} autoComplete="off"  maxLength="20"name="nome" onChange={handlechanger}></input>
                <p className={validateUserName?"valido":"invalido"}>Nome de utilizador ja existe</p>
            </div>
            <div className="content-controler">
                <label className="content-description"><p>Email</p></label>
                <input type="mail" className="input-controler" onBlur={validateEmail} autoComplete="off" maxLength="40"name="email" onChange={handlechanger}></input>
                <p className={validateUserEmail?"valido":"invalido"}>Email invalido</p>
            </div>
            <div className="content-controler">
                <label className="content-description"><p>Password</p></label>
                <input type="password" onBlur={validatePassword} className="input-controler" autoComplete="off" name="password" onChange={handlechanger}></input>
                <p className={validateUserPassword?"valido":"invalido"}>Password invalida</p>
            </div>
            <div className="content-controler">
                <label className="content-description"><p>Confirmar Password</p></label>
                <input type="password"  onBlur={validatePasswordConf} className="input-controler"  autoComplete="off" onChange={passwordconfHandler}></input>
                <p className={validateUserPasswordConf?"valido":"invalido"}>Password Diferente</p>
            </div>
            <div className="content-controler-termos">
                <div  className="termos-utilizacao">
                    <input type="checkbox"></input>
                    <p className="termos">Li e aceito os</p>
                    <p className="termos-link">Termos de Utilizacao</p>
                </div>
            </div>

            <div className="content-controler">
                <button type="submit" className='cadastrar-button'> cadastrar</button>
            </div>

            <div className="content-controler-termos">
                <div  className="termos-utilizacao">
                    <p className="termos">Ja possui conta?</p>
                    <p className="termos-link" ><div onClick={()=>navigate("/login")}>Entrar</div></p>
                </div>
            </div>

        </form>
        </div>
        
    )
}
export default Cadastro