import React, { useState } from 'react'
import Header from './components/header/header'
import RedesSociais from './components/redesSociais/redessociais'
import Textos from './components/textos/texts'
import Estudos from './components/estudos/estudos'
import Footer from './components/footer/footer'
import TextosNovos from './components/novostextos/novostextos'


function Curriculo(){
    const [curriculo,SetCurriculo] = useState({
       
        nome : "Juan Garcia De Lima",
        imagem : 'https://scontent.fpoa32-1.fna.fbcdn.net/v/t1.0-9/15178942_545046419033303_4096679453469275820_n.jpg?_nc_cat=104&ccb=1&_nc_sid=09cbfe&_nc_eui2=AeHFT6tBLBvUV2SJ860tGoH3Rw4FdxJtUW5HDgV3Em1RbrnxqRqkcAHCURbg9T5sLG-VrYFMauXxciTHGV1DMOSK&_nc_ohc=rejsjCIA9w0AX-71LXP&_nc_ht=scontent.fpoa32-1.fna&oh=6dd67a804fbb09a84f06f8b9f3e14492&oe=5FB48685',
        texto1 : `Sou nascido em Alvorada, precisamente, no dia 19 de Agosto de 2005, sempre fui apaixonado por tecnologia , sempre tentando descobrir cada vez mais coisa com ela, como sempre, sendo curioso, e as vezes, levando um xingão da mãe por isso, mas, nesse ano, sinto que estou dando um salto cada vez maior com esse curso, e espero levantar "asas", e alcançar voos muito maiores com essa qualificação em react, que IREI conseguir!!`,
        texto2:'Sempre fui apaixonado por jogar e afins, sempre fui extremamente apaixonado por tecnologia, e hoje, com esse curso, sinto que posssuo a melhor oportunidade da minha vida de poder evoluir e me tornar um grande programador',
        texto3: 'Meu objetivo com esse curso, é poder só alcançar voos maiores, e realizar meu sonho de poder trabalhar com o que eu mais gosto, a tecnologia',
        texto4: 'Já pulei de um balanço em movimento, sou um fã extremo da série DMC(Devil May Cry), meu primeiro videogame, apesar da minha idade, foi um SNES, e eu zerei todos os Uncharted, contando todos, mais de 10 vezes',
        idade : "15 anos",
        titulo : 'Dev Junior',
        cidadeNascimento : 'Alvorada',

        redesSociais : [
            {
                url :"https://www.facebook.com/juangarciadelima",
                nomeDaRede : 'Facebook'
            },
            {
               url : "https://www.instagram.com/juangarciadelima/?hl=pt-br",
               nomeDaRede : 'Instagram'
            },{
                url :'https://www.instagram.com/juangarciadelima/?hl=pt-br',
                nomeDaRede : 'GitHub'
            },
            {
                url:null,
                nomeDaRede:'juangarciadelima884@gmail.com'
            },{
                url:null,
                nomedaRede:"5551984279706"
            }
        ],

        estudos:[{
            lugar : 'SuperGeeks',
            ata: '5° Módulo'
        },{
            lugar :'São Marcos',
            ata: '1° Ano do Ensino Médio'
        }],

        textodebaixo:'Obrigado por terem visto meu currículo, até a próxima'
        
})      
return(
    <>
    <Header nome = {curriculo.nome} imagem = {curriculo.imagem} /> 
    <Textos texto1 = {curriculo.texto1} idade = {curriculo.idade} texto2 = {curriculo.texto2}  titulo ={curriculo.titulo} cidadeNascimento = {curriculo.cidadeNascimento} />
    <RedesSociais Redes={curriculo.redesSociais} />
    <Estudos estudos={curriculo.estudos} />
    <Footer textoDeBaixo={curriculo.textodebaixo} />
    <TextosNovos texto3 = {curriculo.texto3} texto4 = {curriculo.texto4} />
    </>
)}

export default Curriculo