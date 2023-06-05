import React from "react";
import { useEffect,useState } from "react";

import Capa from '../imagens/menina.jpeg'
import axios from "axios";
import './adicionar.css'

const AdicionarFilmes=()=>{

    const[moviedata,setmovieData]=useState({
        TITULO: "",
        COVER: "",
        DATA_EXIBICAO:"",
        PRECO:"",
        DISPONIVEIS:"",
        DESCRICAO:"",
        GENERO:"",
        image:null,
        
    })


    
    const changeHandler=(e)=>{
        setmovieData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const Handler=(e)=>{
        setmovieData((prev)=>({...prev,[e.target.name]:e.target.files[0].name}))
        setmovieData((prev)=>({
            ...prev,
            image: e.target.files[0]
          }));
    }
    const clear=()=>{
        document.getElementsByName("TITULO").value=""
    }

    const submitHandler=async (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('TITULO', moviedata.TITULO);
        formData.append('COVER', moviedata.COVER);
        formData.append('DATA_EXIBICAO', moviedata.DATA_EXIBICAO);
        formData.append('PRECO', moviedata.PRECO);
        formData.append('DISPONIVEIS', moviedata.DISPONIVEIS);
        formData.append('DESCRICAO', moviedata.DESCRICAO);
        formData.append('GENERO', moviedata.GENERO);
        formData.append('image', moviedata.image);

        console.log((await axios.post("http://localhost:8800/movies",formData)))
        clear()

    }
    return(
        <div className="card">
        <form className="main-container" action="movies" method="post "onSubmit={submitHandler} autoComplete="off">
            <div className="input_controler">
                <label>
                    <p>titulo</p>
                </label>
                <input type="text" name="TITULO" onChange={changeHandler} autoComplete="off"></input>
            </div>
            <div className="input_controler">
                <label>
                    <p>cover</p>
                </label>
                <input type="file" name="COVER" onChange={Handler} accept="image/*"></input>
            </div>
            <div className="input_controler">
                <label>
                    <p>data</p>
                </label>
                <input type="date" name="DATA_EXIBICAO" onChange={changeHandler} autoComplete="off"></input>
            </div>
            <div className="input_controler">
                <label>
                    <p>valor</p>
                </label>
                <input type="number" name="PRECO" onChange={changeHandler} autoComplete="off"></input>
            </div>
            <div className="input_controler">
                <label>
                    <p>disponiveis</p>
                </label>
                <input type="number" name="DISPONIVEIS" onChange={changeHandler} autoComplete="off"></input>
            </div>
            <div className="input_controler">
                <label>
                    <p>descricao</p>
                </label>
                <input type="text" name="DESCRICAO" onChange={changeHandler} autoComplete="off"></input>
            </div>
            <div className="input_controler">
                <label>
                    <p>genero</p>
                </label>
                <input type="text" name="GENERO" onChange={changeHandler} autoComplete="off"></input>
            </div>
            <div className="input_controler">
                <button type="submit"> adicionar</button>
            </div>
        </form>

        <div className="main-container preview">
            <img id="preview"src={Capa} alt="Preview da capa"/>
            <p id="Titulo_filme">{moviedata.TITULO}</p>
            <p id="Descricao_filme">{moviedata.DESCRICAO}</p>
            <p id="Preco_filme">{moviedata.PRECO}</p>
            <p id="Data_filme">{moviedata.DATA_EXIBICAO}</p>
            <p id="Lugares_filme">{moviedata.DISPONIVEIS}</p>
            <p id="Genero_filme">{moviedata.GENERO}</p>
        </div>
        </div>
    )
}
export default AdicionarFilmes