import logo from '../../imagens/logo-catbooks.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

function Logo(){
    return(
        <LogoContainer>
            <img src={logo} alt='logo'></img>
            <p>CatBooks</p>
       </LogoContainer>
    )
}

export default Logo;
