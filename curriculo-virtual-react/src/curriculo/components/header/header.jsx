import React from 'react'
import '../header/header.css'


function Header({nome,imagem}){
   return <> <h1 className='header'> {nome}</h1>
       <section><img className='Imagem' src={imagem} alt="Imagem do Juan"/></section>
   </>
}


export default Header