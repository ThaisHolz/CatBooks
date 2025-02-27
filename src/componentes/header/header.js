import Logo from '../logo';
import Menu from '../menu';
import IconeMenu from '../icones';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <Menu/>
            <IconeMenu/>
        </HeaderContainer>
    )
}

export default Header;