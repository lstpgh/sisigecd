import React,  {Component}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/register.css';
// import { BrowserRouter as Router, Link } from "react-router-dom";

class Register extends Component {
    render() {
        return (
           
            <form className="form-register">
                <h2>Registro</h2>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Ingrese Nombre" />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" placeholder="Ingrese Apellido" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ingrese email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Ingrese password" />
                </div>

                <button type="submit" id="btn_register">Registrar</button>
                {/*<Router><p className="forgot-password text-right">
                    Ya registrado <Link to="/login"> Ingreso </Link>
                </p></Router> */}
            </form>
            
        );
    }
}
    export default Register;