import Header from './componentes/header/header.js';
import styled from 'styled-components';

 /* Substituição do css */ 
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#E3D0D8, #827081);

  li{
    list-style: none;
  }
`

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
