import { useContext } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function CartView() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCart = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);

    if (data.inStock < quantity) {
      window.alert('Lo sentimos. No hay suficientes productos en inventario');
      return;
    }
    console.log('Cantidad:  ' + quantity);
    console.log('Cantidad en inventario:  ' + item.inStock);
    ctxDispatch({
      type: 'AGREGAR_PRODUCTO_CARRITO',
      payload: { ...item, quantity },
    });
  };

  const removeItem = (item) => {
    ctxDispatch({ type: 'ELIMINAR_PRODUCTO_CARRITO', payload: item });
  };

  const proceedPay = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Carrito de Compras</title>
      </Helmet>
      <h1>Carrito de Compras</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              El Carrito de Compras está vacío <Link to="/">Ver productos</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      <Button
                        variant="light"
                        onClick={() => updateCart(item, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>
                      {''}
                      <Button
                        variant="light"
                        onClick={() => updateCart(item, item.quantity + 1)}
                        disabled={item.quantity === item.inStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>{' '}
                    </Col>
                    <Col md={2}> ${item.price}</Col>
                    <Col md={2}>
                      <Button variant="light" onClick={() => removeItem(item)}>
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    Productos) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={proceedPay}
                      disabled={cartItems.length === 0}
                    >
                      Proceder al Pago
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
