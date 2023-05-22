import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Cadastro from './components/login/cadastro';
import MovieList from './components/movies/movieList';
import Navbar from './components/navbar/navbar';
import Contacto from './routes/Contacto';
import Login from './components/login/login';

import {BrowserRouter,Routes,Route} from "react-router-dom"
//<div><MovieList lista={filmes} loginControler={loginControler} login={login}></MovieList></div>
function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Um filme qualquer I',
      openingText: 'lorem habbahbh hbch dhbcahbcahbchb chbchbdhbca ch cbahdbcha chdac hadcbadhbcahbchad chbadhcbaicbhc dh cha dchbdch ahcbdhcbhac ahcbdahbcah',
      releaseDate: '2021-05-18',
      cover:'components/imagens/menina.jpeg',
      preco:'250$00',
      disponiveis:'40'
    },
    {
      id: 2,
      title:  'Um filme qualquer I',
      openingText: 'lorem habbahbh hbch dhbcahbcahbchb chbchbdhbca ch cbahdbcha chdac hadcbadhbcahbchad chbadhcbaicbhc dh cha dchbdch ahcbdhcbhac ahcbdahbcah',
      releaseDate: '2021-05-19',
      cover:'/Users/diegosousa/Documents/GitHub/MindeloCine/mindelocine-server/pictures/infiltrado.jpeg',
      preco:'250$00',
      disponiveis:'40'
    },
    {
      id: 3,
      title:  'Um filme qualquer I',
      openingText: 'Este é o segundo texto de abertura do filme',
      releaseDate: '2021-05-19',
      cover:'/Users/diegosousa/Documents/GitHub/MindeloCine/mindelocine-server/pictures/infiltrado.jpeg',
      preco:'250$00',
      disponiveis:'40'
    },
    {
      id: 4,
      title:  'Um filme qualquer I',
      openingText: 'Este é o segundo texto de abertura do filme',
      releaseDate: '2021-05-19',
      cover:'/Users/diegosousa/Documents/GitHub/MindeloCine/mindelocine-server/pictures/infiltrado.jpeg',
      preco:'250$00',
      disponiveis:'40'
    },
  ];
  const[ filmes, setFilmes]=useState([])
  const[ verificar, setverificar]=useState(true)
  const[login,setLogin]=useState(true)
  const loginControler=()=>{setLogin(!login)}
  
  const filmesList=dummyMovies.map((filmData)=>{
    return{
      id:filmData.id,
      titulo:filmData.title,
      capa:filmData.cover,
      release:filmData.releaseDate,
      desc:filmData.openingText,
      valor:filmData.preco,
      vagas:filmData.disponiveis
    };
  });
  if(verificar){
    setFilmes(filmesList)
  setverificar(false)}
  

  console.log(filmes)
  return (
    <div className='main'>
       
      <BrowserRouter>
        <Routes>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/main" element={
            <div>
              <Navbar loginControler={loginControler} login={login}></Navbar>
              <div><MovieList lista={filmes} loginControler={loginControler} login={login}></MovieList></div>
            </div>
          }></Route>
          <Route path="/cadastrar" element={<Cadastro/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
