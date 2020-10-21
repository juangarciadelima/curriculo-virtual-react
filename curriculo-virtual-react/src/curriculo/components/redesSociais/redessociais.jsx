import React from 'react'
import './redessociais.css'

function RedesSociais({Redes}){
    return <section className="Coluna2"> 
     <h2 className = 'tituloNadaImportante'>Redes Sociais</h2>
     <ul>
         {Redes.map((rede,index)=>(
             <li className = 'tituloNadaImportante' key={index}><a href={rede.url}>{rede.nomeDaRede}</a></li>
         ))}
     </ul>
    </section>

}


export default RedesSociais