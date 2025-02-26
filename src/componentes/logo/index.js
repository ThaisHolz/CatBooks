import './estilo.css';
import logo from '../../imagens/logo-catbooks.png';

function Logo(){
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p>CatBooks</p>
       </div>
    )
}

export default Logo;
