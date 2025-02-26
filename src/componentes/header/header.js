import Logo from '../logo';
import Menu from '../menu';
import IconeMenu from '../icones';
import './header.css';

function Header(){
    return(
        <header className='App-header'>
            <Logo/>
            <Menu/>
            <IconeMenu/>
        </header>
    )
}

export default Header;