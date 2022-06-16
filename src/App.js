import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Blog from './componentes/Blog';
import Inicio from './componentes/Inicio';
import Acercade from './componentes/Acerca-de';
import Header from './componentes/Header';
import styled from 'styled-components';
import Post from './componentes/Post';
import Error404 from './componentes/Error404';

const App = () => {
  return ( 
    <BrowserRouter>
      <ContenedorPrincipal>
      <Header />
        <Main>
        <Routes>
            <Route path='*' element = {<Error404 />}/>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog"  element={<Blog />} />
            <Route path="/post/:id"  element={<Post />} />
            <Route path="/acerca-de"  element={<Acercade />} />
        </Routes>
      </Main>
    </ContenedorPrincipal>      
  </BrowserRouter>
   );
}
 
const ContenedorPrincipal = styled.div `
    padding: 40px;
    width: 90%;
    max-widht: 700px;
 `;

 const Main = styled.div `
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    
 
 `;

export default App;