
import './App.css';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Cadastro from './components/login/cadastro';

import Principal from './routes/principal';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import About from './routes/About';
import Contacto from './routes/Contacto';
import Login from './components/login/login';
import Adicionar from './routes/Adicionar';
import Perfil from './routes/Perfil';

function App() {
 
  const[ filmes, setFilmes]=useState([])
  const[ verificar, setverificar]=useState(true)
  const[login,setLogin]=useState(true)
  const loginControler=()=>{setLogin(!login)}
  
  
  const rotas=createBrowserRouter([{
    path: '/',
    element: <Principal></Principal>,
    errorElement: <ErrorPage />,
    children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contacto/> },
    { path: '/login', element: <Login/> },
    { path: '/cadastro', element: <Cadastro/> },
    { path: '/adicionar', element: <Adicionar/> },
    { path: '/perfil', element: <Perfil/> },
  ],
  }])

  
  return (
    <div className='main'>
       <RouterProvider router={rotas} />
       
    </div>
  );
}

export default App;
