import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Inicio de Sesión</Col>
      <Col className={props.step2 ? 'active' : ''}>Datos de Envío</Col>
      <Col className={props.step3 ? 'active' : ''}>Modo de Pago</Col>
      <Col className={props.step4 ? 'active' : ''}>Realizar Pedido</Col>
    </Row>
  );
}
