import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';
import Header from '../Header';
// import ContactsList from '../ContactsList';

import DefaultTheme from '../../assets/styles/themes/default';

import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
