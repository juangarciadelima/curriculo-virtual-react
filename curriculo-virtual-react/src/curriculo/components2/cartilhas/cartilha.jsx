import React from 'react'
import './cartilha.css'
import '../../components/imagens'

function Cartilha({titulo,imagem,description}){
    return <>

    <h2>{titulo}</h2>
    <img src = {imagem} alt = 'imagemtop'></img>
    <p>{description}</p>

    </>
    
}