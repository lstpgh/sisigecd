import React, { Component } from "react";
import coach from "../assets/images/coach.png";
import teams from "../assets/images/teams.png";
import calendar from "../assets/images/calendar.png";
import player from "../assets/images/player.png";
import "../assets/css/vistaEntrenador.css";
import TablaHorarios from "./TablaHorarios";


class VistaEntrenador extends Component {
    state = {
        entrenador: "ENTRENADOR",
        equipos: "Equipos",
        horarios: "Horarios",
        deportistas: "Deportistas",
        
        
      };
  render() {
    

    return (
       <div className="vista-entrenador">
          <span>
            <h1 className="title fs-1 py-4 bg-warning text-wrap" lh-lg>
               {this.state.entrenador}
               <img src={coach} className="img-coach" alt="coach" />
            </h1>
        </span>
        <button id="btn-action" onClick={this.myfunction}>
        <div id="equipos">
            
            <img src={teams} className="team" alt="equipos"  />
            <h3>{this.state.equipos}</h3>
            
        </div>
        </button>
        <button id="btn-action" onClick={this.myfunction}>
        <div id="horarios">
            <img src={calendar} className="calendar" alt="horarios"  />
            <h3>{this.state.horarios}</h3>
        </div>
        </button>
        <button id="btn-action" onClick={this.myfunction}>
        <div id="deportistas">
            <img src={player} className="players" alt="deportistas"  />
            <h3>{this.state.deportistas}</h3>
        </div>
        </button>

        <TablaHorarios/>



      </div>
    );
  }
}
export default VistaEntrenador;
