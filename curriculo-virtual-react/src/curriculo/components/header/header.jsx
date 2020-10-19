import React from 'react'
import Curriculo from '../../curriculo'
import './header.css'
import Avatar from '../../components/Fotogenico/fotogenico'


function Header({nome,idade}){
   return <>
   <header class = 'header'>
   <span>Olá, meu nome é</span>
   <h1>{nome}</h1>
   <p>Eu tenho {idade}</p>
   </header>
  

   <Fotogenico />
   </>
}

export default Header