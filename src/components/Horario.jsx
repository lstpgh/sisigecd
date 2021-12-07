import React, { Component } from "react";
import Horarios from "../assets/images/Horarios.png";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/horarioUbicacion.css";

class Horario extends Component {
  state = {
    titleHorario: "Horarario de entrenamiento semanal por categorias",
    infoHorario:
      "Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk kdertw ",
  };
  render() {
    return (
      <Card
        className="ubihorario mb-2 text-warning bg-dark rounded-3 mx-5 mt-3"
        id="containerCard"
      >
        <Card.Img
          id="img-card"
          src={Horarios}
          variant="top"
          alt="Horarios"
        />
        <Card.Body>
          <Card.Title>{this.state.titleHorario}</Card.Title>
          <Card.Text className="card-info fs-3">{this.state.infoHorario}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Horario;
