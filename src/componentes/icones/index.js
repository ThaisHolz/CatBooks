import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin-left:80px;
    width: 0px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const icones = [perfil, sacola]; 

function IconeMenu(){
    return(
        <Icones>
          {icones.map((icone) => (
            <Icone><img src={icone}></img></Icone>
          ))}
        </Icones>
    )
}

export default IconeMenu;