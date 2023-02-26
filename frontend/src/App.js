import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './screens/Home';
import ProductView from './screens/ProductView';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/esm/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartView from './screens/CartView';
import SigninView from './screens/SigninView';
import ShippingAdressView from './screens/ShippingAddresView';
import SignupView from './screens/SignupView';
import PaymentMethodView from './screens/PaymentMethodView';
import PlaceOrderView from './screens/PlaceOrderView';
import OrderView from './screens/OrderView';
import OrderHistoryView from './screens/OrderHistoryView';
import ProfileView from './screens/ProfileView';
import Button from 'react-bootstrap/Button';
import { getError } from './screens/Utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signout = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="black" variant="dark" expand="lg">
            <Container>
              <Button
                variant="black"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars fa-2x"></i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img src="img/logo.png" alt="logo-png" />
                  TIF STORE
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-bar">
                <SearchBox />
                <Nav className="me-auto w-100 justify-content-end">
                  {userInfo ? (
                    <NavDropdown
                      title={'Hola, ' + userInfo.name}
                      id="basic-nav-dropdown"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Perfil</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>
                          Historial de Compras
                        </NavDropdown.Item>
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
                  <Link to="/cart" className="nav-link">
                    CARRITO
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categorías</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search/category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<ProductView />} />
              <Route path="/signin" element={<SigninView />} />
              <Route path="/signup" element={<SignupView />} />
              <Route path="/profile" element={<ProfileView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/payment" element={<PaymentMethodView />} />
              <Route path="/shipping" element={<ShippingAdressView />} />
              <Route path="/placeorder" element={<PlaceOrderView />} />
              <Route path="/order/:id" element={<OrderView />} />
              <Route path="/orderhistory" element={<OrderHistoryView />} />
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
