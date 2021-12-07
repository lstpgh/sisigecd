import React, { Component } from "react";
import "../assets/css/entrenador.css";
import Card from "react-bootstrap/Card";

class Entrenador extends Component {
  render() {
    const { nombre, formacion, descripcion, imagen } = this.props.entrenador;

    return (
      <Card className="mb-2 bg-warning text-wrap" >
        <Card.Img id="img-card" variant="top" src={imagen} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text className="card-info fs-3">{descripcion}</Card.Text>
          <Card.Text>{formacion}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default Entrenador;
