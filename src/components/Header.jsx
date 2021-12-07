import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import '../assets/css/header.css';
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="logo-menu-container">
          {/*Logo*/}
          <div id="logo">
            <img src={logo} className="app-logo" alt="logotipo"></img>
          </div>

          {/*Menu Navegacion*/}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <a href="#linkcontInfoUbicacion"> Horario </a>
              </li>
              <li>
                <a href="#linkEntrenadores"> Entrenadores </a>
              </li>
              <li>
                <NavLink to={"/login"}> Ingreso </NavLink>
              </li>
              <li>
                <NavLink to="/register"> Inscripción </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/*Limpiar flotados*/}
        <div className="clearfix"></div>
      </header>
    );
  }
}

export default Header;
