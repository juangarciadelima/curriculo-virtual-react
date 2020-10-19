import React from 'react'
import './aside.css'

function Aside({titulo,cidadeNascimento}){
    return <>
    <aside class = 'aside'>
    <p>Sou um {titulo}</p> 
    <p>Nasci em {cidadeNascimento}</p> 
    </aside>
    </>

    

}
export default Aside