import './App.css';
import logo from './imagens/logo-catbooks.png';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <div className='logo'>
        <img src={logo} alt='logo'></img>
        <p>CatBooks</p>
      </div>
      </header>
    </div>
  );
}

export default App;
