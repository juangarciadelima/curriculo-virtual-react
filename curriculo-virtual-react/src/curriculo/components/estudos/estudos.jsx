import React from 'react'
import './estudos.css'


function Estudos({estudos}){
     return <section className = 'Coluna2'>
     <h2 className='Titulo'>Estudos</h2>
     <ul>
         {estudos.map((estudo,index)=>(
           <li className='Nada' key={index}><p>Estudo na {estudo.lugar} e estou fazendo o {estudo.ata}</p></li> 
         ))}


     </ul>


     </section>
} 


export default Estudos