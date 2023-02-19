import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useContext } from 'react';
import axios from 'axios';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addCart = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
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

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title> {product.name} </Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviewes={product.numReviewes}
        ></Rating>
        <Card.Text>
          <strong> ${product.price} </strong>
        </Card.Text>
        {product.inStock === 0 ? (
          <Button variant="light" disabled>
            No Disponible
          </Button>
        ) : (
          <Button onClick={() => addCart(product)}>Añadir al carrito</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
