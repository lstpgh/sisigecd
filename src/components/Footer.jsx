import React, { Component } from "react";
import logoMisionTic from "../assets/images/logo_misiontic.png";
import '../assets/css/footer.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="containerFoo contentFooter">
          <p>&copy; 2021 SIGED UTP Misión TIC 2022</p>
          <img
            src={logoMisionTic}
            alt="Logo Misión TIC 2022"
            id="logoFooter"
          ></img>
        </div>
        <div className="clearfix"></div>
      </footer>
    );
  }
}
export default Footer;
