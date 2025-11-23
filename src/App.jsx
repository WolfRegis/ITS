import styled from 'styled-components';
import './App.css'
import theme from './components/theme.js';
import Home from './components/pages/home/Home';

function App() {

  return <AppStyled>
      <Home/>
  </AppStyled>
}

export default App

const AppStyled = styled.div`
  font-family: ${theme.fonts.mainColor};
  *{
    font-family: 'Poppins', sans-serif;
  }
`;