import Input from '../input/input.js';
import styled from 'styled-components';
import { useState } from 'react';

const PesquisaContainer = styled.section`
    color: black;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: black;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa(){
    const [textoDigitado, setTextoDigitado] = useState('');

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
            placeholder="Escolha sua próxima leitura." 
            onBlur={evento => setTextoDigitado(evento.target.value)}
            />
        </PesquisaContainer>
    )
}

export default Pesquisa;