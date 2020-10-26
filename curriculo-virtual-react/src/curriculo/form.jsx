import React, { useState } from 'react'


function Formulario() {
         
    let ok = []
    if(ok == null){
        ok = []
    } 

    


    const [projeto, alteraProjeto] = useState([ok])

    function ColocaNoLocalStorage(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor))
        
    }
     
    function PegaDoLocalStorage(chave){
        return JSON.parse(localStorage.getItem(chave))
    }


    function onChangeSupremo(event) {
        const copia = { ...projeto }
        copia[event.target.name] = event.target.value
        alteraProjeto(copia)
    }



    function salvaPessoa() {
        ColocaNoLocalStorage('usuarioc', projeto)
        ok.push(projeto)

    }
    return <form>
        <input onChange={onChangeSupremo} type='text' name='nome' id="a" placeholder="Coloque O Nome Do Projeto"/>
        <input onChange={onChangeSupremo} type="text" name="descricao" id="b" placeholder="Descreva Seu Projeto"/>
        <select onChange={onChangeSupremo} name='tecnologias' id='carros'>
            <option value='HTML'>HTML</option>
            <option value='HTML & CSS'>HTML & CSS</option>
            <option value='JS'>JS</option>
            <option value='React'>React</option>
        </select>
        <label for="img">Coloque Sua Imagem : </label>
        <input onChange={onChangeSupremo} type="file" name="imagem" id="img" />
        <button type="button" onClick={salvaPessoa}>Salva aqui</button>
        <p>O nome do projeto será : {projeto.nome}</p>
        <p>Descreva ele brevemente : {projeto.descricao}</p>
        <p>Voce usou {projeto.tecnologias} no seu projeto</p>

    </form>
}


export default Formulario