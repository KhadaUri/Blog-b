import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return ( 
       <ContenedorHeader>
        <Titulo> Hola Mundo </Titulo>
        <Menu> 
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/acerca-de'>Acerca de</NavLink>
        </Menu>
      </ContenedorHeader> );
}
 
const ContenedorHeader = styled.div `
        text-align: center;
        margin-bottom: 40px;
`;

const Titulo = styled.div `
        margin-bottom: 10px;
        font-size: 26px;
        text-transform: uppercase;
`;

const Menu = styled.nav `
       a{
           text-decoration: none; 
           color: %165169;
           margin: 0 10px;
           font-family: Raleway;
       }

       a:hover {
           color: #19168;
       }

       a.active {
           border-bottom: 2px solid #165168;
           padding-bottom: 3px;
       }
`;

export default Header;