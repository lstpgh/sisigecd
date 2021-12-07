import React, { Component } from "react";
import Slider from "./Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import equipo from "../assets/images/equipo_01.jpeg";
import "../assets/css/contentMain.css";

class ContentMain extends Component {
    
  render() {
    return (
        <div className="linkContentMain">
        <div id="contentMain">
            <Container fluid="sm, md, lg, xl, xxl" id="containerMain">
            <Row xs={1} md={2} className="g-2">
              <Col xs lg="1"></Col> 
               <Col xs lg="4">
                    <Slider/>
               </Col> 
               <Col xs lg="6" >
                    <div id="content-img"><img src={equipo} alt="equipo" id="img-main"/></div>
               </Col>
                              
            </Row>
          </Container>
        
        </div>
        <div className="clearfix"></div>
        </div>

    )
  }
}
export default ContentMain;