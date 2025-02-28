import { livros } from "./dadosLancamentos";
import styled from "styled-components";

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    max-height: 350px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Titulo = styled.h2`
    width: 100%;
    padding: 20px 0;
    color: black;
    font-size: 26px;
    text-align: center;
    margin: 0;
`
const NovosLivrosContainer = styled.div`
    margin-top: 15px;
    display: flex;
    width: 100%;
    max-height: 250px;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <LancamentosContainer>
            <Titulo>ÚTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>
        </LancamentosContainer>
    )
}

export default UltimosLancamentos;
