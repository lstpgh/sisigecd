import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import "../assets/css/slider.css";

class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <h1>Bienvenido al Club Palma Real</h1>
        <h3>“Si trabajas, los resultados vendrán solos. No hago las cosas a medias, porque sé que si lo hago entonces sólo puedo esperar tener resultados a medias” - Michael Jordan"</h3>
        <h5>Que esperas para ponerte en forma y disfrutar de la pasion del deporte, date la oportunidad de entrenar con nosotros! </h5>
        <Button variant="info" id="btnInfo">Inscribete ahora</Button>
        <div className="clearfix"></div>
      </div>
    );
  }
}
export default Slider;
