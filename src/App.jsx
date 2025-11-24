import styled from 'styled-components';
import './App.css'
import Home from './components/pages/home/Home';
import theme from './components/theme';

function App() {
  
  return <AppStyled>
      <Home/>
  </AppStyled>
}

export default App

const AppStyled = styled.div`
  *{
    font-family: ${theme.fonts.main};
  }
`;