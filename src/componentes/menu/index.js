import './index.css';

const textoMenu = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function Menu(){
    return(
        <ul className='opcoes'>
          {textoMenu.map((texto) => (
            <li className='menu'><p>{texto}</p></li>
          ))}
        </ul>
    )
}

export default Menu;
