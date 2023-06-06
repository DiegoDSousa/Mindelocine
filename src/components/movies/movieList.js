import React from "react"
import Movie from "./movie"
import {useState,useEffect} from 'react'
import './movielist.css'
import axios from 'axios'

const MovieList=(props)=>{
    const [Movies,setMovies]=useState([])
    useEffect(()=>{
        const fetchAllMovies = async()=>{
            try{
                const res= await axios.get("https://api-mindelcine.vercel.app/movies")
                console.log(res.data)
                setMovies(res.data)
                //console.log(Movies)
            }catch(err){}
        }
        fetchAllMovies()
    },[])



    return(
        <div className="movies-container">
            {Movies.map((individual_movie)=>(
                <Movie
                    key={individual_movie.ID_FILMES}
                    title={individual_movie.TITULO}
                    descricao={individual_movie.DESCRICAO}
                    capa={individual_movie.COVER}
                    data={individual_movie.DATA_EXIBICAO}
                    valor={individual_movie.PRECO}
                    vaga={individual_movie.DISPONIVEIS}
                    loginControler={props.loginControler} login={props.login}
                ></Movie>
        ))}
        </div>
        
    )
}
export default MovieList