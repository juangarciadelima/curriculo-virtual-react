import React from 'react'
import './novostextos.css'


function TextosNovos({texto3,texto4}){
  return <section className='A'>
       <h2 className='titulo'>Objetivos Com o Curso</h2>
       <p>{texto3}</p>
       <h2 className='titulo'>Curiosidades</h2>
       <p>{texto4}</p>
   </section>
}

export default TextosNovos