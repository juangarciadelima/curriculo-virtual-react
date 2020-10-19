import React, { useState } from 'react'
import Imagens from './components/imagens/'
import Aside from './components/aside'
import Baixo from './components/footer'
import Images from './components/header'
import Textos from './components/textos'
import Cartilha from './components2/cartilha.css'
import Colunas from './components2/colunas.css'


import './curriculo.css'


function Curriculo(){

    const [curriculo,SetCurriculo] = useState({
        coluna1 : { 
        Nome : 'Juan Garcia De Lima',
        idade : '15 Anos',
        cidadeNascimento : 'Alvorada',
        email : 'Meu mano, te acalma, vou colocar com as redes socias lá',
        titulo : 'Dev Junior',
        
        objetivo : 'Virar um grande programador',
        textinho : 'Nasci no dia 19 de agosto, sendo leonino, sempre fui enérgico e apaixonado pelos games e hoje, busco virar um programador de sucesso e alcançar voos cada vez maiores',        
        lista : [
            {
            nome : 'SuperGeeks',
            data : 'Fevereiro de 2020',
            acao : '4° Módulo',
            
            },
            {
                nome : 'São Marcos', 
                data : 'Janeiro de 2011',
                acao : '1° Módulo'
            }
        ],

        textinho : 'Ainda falando sobre mim, sempre tive o prazer de mexer em computadores,  e hoje, com esse curso, percebo que só aumentou mais esse prazer',
    },  
    coluna2 : {
        cartilha : [
            {
                titulo : 'Gamemaker',
                imagem : 'gamemaker.png',
                description : 'Fiz um jogo de tiro para uma Jam do Gamemaker'
            },
            {
                titulo : 'HTML',
                imagem : 'html.png',
                description : 'Fiz um Curriculo Virtual em HTML'
            },
            {
                titulo : 'Filmes',
                imagem : 'filme.png',
                description : 'Fiz um filme pra Tarantino'
            },
            {
                titulo : 'Games',
                imagem : 'ps.png',
                description : 'Desenvolvi Crash7 pra PS15'
            },
            {
                titulo : 'Livros',
                imagem : 'livro.png',
                description : 'Escrevi A Cúpula é Das Estrelas'
            },
            {
                titulo : 'Musicas',
                imagem : 'musica.png',
                description : 'Fiz músicas para 50 Cent'
            },
        ],

        RedesSociais :[{
            url : 'https://www.facebook.com/juangarciadelima'},
            {url : 'https://www.instagram.com/juangarciadelima/?hl=pt-br'},
            {url : 'https://github.com/juangarciadelima'},
            {url : 'Kermit#9757'}


        ],
            footer : 'Obrigado por ter visto meu currículo, até a próxima'
        
    }
    

    })
return(
    <>
    <header name = {curriculo.Nome} idade = {curriculo.Idade}/>,
    <main>
   <Textos textos = {curriculo.textinho}/>
   <Aside cidadeNascimento = {curriculo.cidadeNascimento} titulo = {curriculo.titulo}/>
   <Images imagem = {curriculo.imagenzinha}/>
   <Cartilha cartilha = {curriculo.cartilha}/>
   <Imagens imagens = {curriculo.imagem}/>
   <Colunas coluna1 = {curriculo.coluna1} coluna2 = {curriculo.coluna2}/>
   </main>


  <Baixo footer = {curriculo.footer}/>
    </>

)
}



export default Curriculo

    

