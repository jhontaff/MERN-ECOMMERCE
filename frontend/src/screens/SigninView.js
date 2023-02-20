import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import { Link, useLocation } from 'react-router-dom';

export default function SigninView() {
  const { search } = useLocation();
  const redirectInURL = new URLSearchParams(search).get('redirect');
  const redirect = redirectInURL ? redirectInURL : '/';
  return (
    <Container className="signin-container">
      <Helmet>
        <title>Inicia Sesión</title>
      </Helmet>
      <h1 className="my-3">Inicia Sesión</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Iniciar Sesión</Button>
        </div>
        <div className="mb-3">
          ¿Usuario Nuevo?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Crear Cuenta</Link>
        </div>
      </Form>
    </Container>
  );
}
