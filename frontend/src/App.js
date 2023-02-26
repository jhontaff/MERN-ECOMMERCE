import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import ProductView from './screens/ProductView';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CartView from './screens/CartView';
import SigninView from './screens/SigninView';
import SignupView from './screens/SignupView';
import PaymentMethodView from './screens/PaymentMethodView';
import PlaceOrderView from './screens/PlaceOrderView';
import ShippingAdressView from './screens/ShippingAddresView';
import OrderView from './screens/OrderView';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signout = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="black" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>TIF Store</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  CARRITO
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown
                    title={'Hola, ' + userInfo.name}
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Perfil</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Historial de Compras</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signout}
                    >
                      Cerrar Sesión
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    {' '}
                    Hola!, Identificate{' '}
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<ProductView />} />
              <Route path="/signin" element={<SigninView />} />
              <Route path="/signup" element={<SignupView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/payment" element={<PaymentMethodView />} />
              <Route path="/shipping" element={<ShippingAdressView />} />
              <Route path="/placeorder" element={<PlaceOrderView />} />
              <Route path="/order/:id" element={<OrderView />} />
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
