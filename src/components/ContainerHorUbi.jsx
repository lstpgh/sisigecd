import React, {Component} from "react";
import Ubicacion from "./Ubicacion";
import Horario from "./Horario"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/containerHorUbi.css";

class ContainerHorUbi extends Component{
    state = {
        tituloContainerUbiHor: "HORARIOS Y UBICACIÓN",
        infoHorariosUbicacion:"Los horarios estan organizados por categorias a lo largo de la semana cada categoria tiene su espacio de entrenamiento, sesiones de practica y actividades de juego durante la semana"
        
    }
    render(){
        return (
        <div id="linkcontInfoUbicacion">
        <div id="titlecontInfoUbi">
            <span><h1 className="title fs-1 py-4 bg-warning text-wrap" lh-lg> { this.state.tituloContainerUbiHor } </h1></span>
            <span>
            <p className="title py-5 px-7 mx-5 text-md-center background-color">
              {" "}
              {this.state.infoHorariosUbicacion}{" "}
            </p>
          </span>
            <Container fluid="sm, md, lg, xl, xxl" id="containerUbicacion">
            <Row xs={1} md={2} className="g-2">
               <Col>
                     <Horario/>
               </Col> 
               <Col>
                    <Ubicacion/>
               </Col>
                              
            </Row>
          </Container>
        <div className="clearfix"></div>
        </div>
        </div>
        )}

}

export default ContainerHorUbi;