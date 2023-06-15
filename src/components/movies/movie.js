
import React, { useState } from 'react';
import './movie.css'



const Movie=(props)=>{
    const base_url="https://7fc3-197-255-136-12.eu.ngrok.io"
    const [selectedImage, setSelectedImage] = useState(base_url+'/imagem/'+props.capa);
    const handleImageChange = (event) => {
      setSelectedImage();
    };
    
    return(
        
    <div className='Movie-container'>
        <div className='cover-holder'><img src={selectedImage} onChange={handleImageChange} className='cover' alt="foto de capa"></img></div>
        <div className='description-container'>
            <div className='holder'>
                <p>Titulo:</p>
                <p className='conteudo'>{props.title}</p>
            </div>
            <div className='holder '>
                <p>Data exibição:</p>
                <p className='conteudo'>{props.data}</p>
            </div>
            <div className='holder'>
                <p>Preço:</p>
                <p className='conteudo'>{props.valor}</p>
            </div>
            <div className='holder '>
                <p>Disponiveis:</p>
                <p className='conteudo'>{props.vaga}</p>
            </div> 
            <div className='holder'>
                <p>Descrição:</p>
                <p className='conteudo'>{props.descricao}</p>
            </div>
        </div>
        
    </div>
    
)}
export default Movie