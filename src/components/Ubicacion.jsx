import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/horarioUbicacion.css";

class Ubicacion extends Component{
    state = {
        titleUbicacion: "UBICACIÓN",
        infoUbicacion: "Lorem ipsum snfe idnsnsd nskd cnslnd  nndndo jrejjp vjfs pidjnlnv dlasvnlk kdertw ",
        geoUbicacion: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15929.107980732464!2d-76.30862906878663!3d3.5233300977348287!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1637709846143!5m2!1ses-419!2sco",
    }
    render(){
        return(
      <Card className="ubihorario text-warning bg-dark rounded-3 mx-5 mt-3" >
        <Card.Img id="img-card" variant="top" /><iframe title="Ubicación" src= {this.state.geoUbicacion}/>
        <Card.Body>
          <Card.Title>{this.state.titleUbicacion}</Card.Title>
          <Card.Text className="card-info fs-3">{this.state.infoUbicacion}</Card.Text>
        </Card.Body>
      </Card>
        )
    }
}

export default Ubicacion;