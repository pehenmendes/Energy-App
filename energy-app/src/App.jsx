import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EnergySourceDetails from './pages/EnergySourceDetails';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h2, h3 {
    color: #2e7d32;
  }
`

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f0f8ff;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/source/:id" element={<EnergySourceDetails />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;