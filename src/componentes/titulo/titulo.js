import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 20px 0;
    color: ${props => props.cor || 'black'}; 
    font-size: ${props => props.tamanhoFonte || '26px'};
    text-align: center;
    margin: 0;
`
//Utilizando ${props => xxx} pode ser feito alteração dos itens
