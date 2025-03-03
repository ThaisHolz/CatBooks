import { livros } from "./dadosLancamentos";
import { Titulo } from "../titulo/titulo.js";
import CardRecomenda from "../cardRecomenda/cardRecomenda.js";
import imgCard from "../../imagens/livro3.png"
import styled from "styled-components";

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    max-height: 350px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NovosLivrosContainer = styled.div`
    margin: 25px;
    display: flex;
    width: 100%;
    max-height: 250px;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        ///Cor do titulo pode ser alterar devido ao componente titulo.js permitir
        <LancamentosContainer>
            <Titulo cor='red' >ÚTIMOS LANÇAMENTOS</Titulo> 
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo='Talvez você goste...'
                subtitulo='The Hobbit'
                descricao='Uma jornada pela Terra Média'
                imagem={imgCard}
            />
        </LancamentosContainer>
    )
}

export default UltimosLancamentos;
