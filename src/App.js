import Header from './componentes/header/header.js';
import Pesquisa from './componentes/pesquisa/pesquisa.js';
import styled from 'styled-components';

 /* Substituição do css */ 
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#E3D0D8, #827081);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
