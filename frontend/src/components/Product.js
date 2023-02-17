import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
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
        <Button>Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
