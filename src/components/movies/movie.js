import Capa from '../imagens/menina.jpeg'
import './movie.css'


import foto from "../../../../mindelocine-server/pictures/cover.png"
const Movie=(props)=>{
    
    console.log(props.capa)
    return(
        
    <div className='Movie-container'>
        <div className='cover-holder'><img src={"../../../../mindelocine-server/pictures/"+props.capa} alt="foto de capa"></img></div>
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