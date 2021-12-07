import React, { Component } from "react";
import "../assets/css/errorPage.css";

class ErrorPage extends Component {
  render() {
    return (
      <div className="error-page">
          <h1>Página no encontrada</h1>
          <p>La pagina que intenta acceder no existe en la web</p>
      </div>
        
     
    );  
  }
}
export default ErrorPage;
