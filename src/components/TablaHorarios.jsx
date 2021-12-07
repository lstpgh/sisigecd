import React, { Component } from "react";
import MaterialTable from "material-table";
import "../assets/css/tablahorario.css";


class tablaHorarios extends Component {
    
    render() {
        const columnas=[
            {
                hora:'Hora',
                field:'hora'
            },
            {
                title:'Lunes',
                field:'lunes'
            },
            {
                title:'Martes',
                field:'martes'
            },
            {
                title:'Miercoles',
                field:'miercoles'
            },
            {
                title:'Jueves',
                field:'jueves'
            },
            {
                title:'Viernes',
                field:'viernes'
            },
            {
                title:'Sabado',
                field:'sabado'
            },
        ];
        const data=[
            {hora:'2:00'},
            {hora:'3:00', lunes:'minivoley - alevines'},
            {hora:'4:00',  lunes:'minivoley - alevines'},
            {hora:'5:00', lunes:'minivoley - infantil'},
            {hora:'6:00', lunes:'minivoley - infantil'}
        ]
      return (
          <div className="tablaHorario">
              <MaterialTable
              columns={columnas}
              data={data}
              title="Horario de entrenamiento semanal"
              actions={[
                  {
                    icon:'edit',
                    tooltip:'Editar actividad',
                    onClick: (event, rowData)=>alert('vas a editar esta actividad'+rowData.hora)
                  },
                  {
                    icon:'delete',
                    tooltip:'Eliminar actividad',
                    onClick: (event, rowData)=>window.confirm('Esta seguro de querer eliminar esta actividad'+rowData.lunes+'?')
                  }  
              ]}
              options={{
                  actionsColumnIndex: -1
              }}
              />
          </div>

      )
    }
}  
export default tablaHorarios;