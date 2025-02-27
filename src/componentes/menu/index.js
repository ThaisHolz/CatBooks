import styled from 'styled-components';

const MenuContainer = styled.li`
    display: flex;
    font-size:  16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5%;
    cursor: pointer;
    min-width: 120px;
`
const OpcoesContainer = styled.ul`
    display: flex;
`
const textoMenu = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function Menu(){
    return(
        <OpcoesContainer>
          {textoMenu.map((texto) => (
            <MenuContainer><p>{texto}</p></MenuContainer>
          ))}
        </OpcoesContainer>
    )
}

export default Menu;
