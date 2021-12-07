import React, { Component } from "react";
import Entrenador from "./Entrenador";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/entrenadores.css";

class Entrenadores extends Component {
  state = {
    entrenadores: [
      {
        nombre: "Entrenador 1",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provcodigoent corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
        formacion: "Coache FIVB Nivel 2",
        imagen:
          "https://scontent.fclo1-4.fna.fbcdn.net/v/t1.18169-9/22490051_2392913887600884_1855912314619255996_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGab-DF0y5sJjOzHNHVcODSuUHoloa-Qae5QeiWhr5Bp2i5oE4O2wx5P-bAJVHuGM-VaO5C1DyGBPyBr3dxYm3-&_nc_ohc=JSqOkYzjmx4AX_mo_2W&_nc_ht=scontent.fclo1-4.fna&oh=ca9f6b9d526f2d79386c553472a59ceb&oe=61BABAB0",
      },
      {
        nombre: "Entrenador 2",
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provcodigoent corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
        formacion: "Profesional en deporte Universidad del Valle",
        imagen:
          "https://scontent.fclo1-4.fna.fbcdn.net/v/t31.18172-8/339672_2387132764253_693891636_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeH3lg38CBsfET01y_B4UDZQfwvDqJkWTCZ_C8OomRZMJstSdXw3B87TVc1uVhWI87XwL-cySJMXYRWeKipgBvES&_nc_ohc=qQzKqxiRJeIAX-WmyFg&_nc_ht=scontent.fclo1-4.fna&oh=8339a89e9f2c069d0ee4d42d933c525b&oe=61BE0B0C",
      },
    ],
    tituloentrenadores: "NUESTROS ENTRENADORES",
    mensajeentrenadores: '"PASION, ENTREGA Y DISCIPLINA EN NUESTRA LABOR"',
    infoentrenadores:
      "Son profesionales en Educación Física y Deportes, especializados en la formación deportiva de voleibol con certificación de la FIVB (Federación internacional de voleibol) nivel 1 y 2, Calificados para acompañarlos en su proceso formativo y competitivo con estándares de calidad y el respaldo institucional del Imder Palmira y la liga vallecaucana de voleibol",
  };
  render() {
    return (
      <div id="linkEntrenadores">
        <div id="tituloEntrenadores">
          <span>
            <h1 className="title fs-1 py-4 bg-warning text-wrap" lh-lg>
              {" "}
              {this.state.tituloentrenadores}{" "}
            </h1>
          </span>
          <span>
            <h3 className="title fs-3 py-2 m-0 background-color " lh-lg>
              {" "}
              {this.state.mensajeentrenadores}{" "}
            </h3>
          </span>
          <span>
            <p className="title py-5 px-5 mx-5 text-md-center background-color">
              {" "}
              {this.state.infoentrenadores}{" "}
            </p>
          </span>
          <Container fluid="sm, md, lg, xl, xxl" id="entrenadores">
            <Row xs={1} md={2} className="g-2">
              {this.state.entrenadores.map((entrenador, i) => {
                return (
                  <Col>
                    <Entrenador key={i} entrenador={entrenador} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
export default Entrenadores;
