import styled from 'styled-components';
import './App.css'
import Home from './components/pages/home/Home';
import theme from './components/theme';
import About from './components/pages/about/About';

function App() {
  
  return <AppStyled>
      <About/>
  </AppStyled>
}

export default App

const AppStyled = styled.div`
  *{
    font-family: ${theme.fonts.main};
  }
`;