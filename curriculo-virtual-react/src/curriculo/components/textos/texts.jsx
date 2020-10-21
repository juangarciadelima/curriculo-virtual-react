import React from 'react'
import './texts.css'


function Texts({texto1,texto2,texto3,titulo,cidadeNascimento}){
    return <div className ='Coluna1'>
 <h2 className='Titulo'>Biografia</h2>
<p>{texto1}</p>
<p>{texto2}</p>
<p>{texto3}</p>
<section className = 'Ata'>
 <p> Sou um {titulo}</p>
 <p>Nasci em {cidadeNascimento}</p>
 </section>
    </div>
}



export default Texts