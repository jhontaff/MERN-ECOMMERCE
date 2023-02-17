import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import ProductView from './screens/ProductView';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>TIF Store</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<ProductView />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">Derechos reservados</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
