import React,  {useRef}  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/register.css';
// import { BrowserRouter as Router, Link } from "react-router-dom";

import axios from "axios";
import { useNavigate, Navigate } from 'react-router-dom'
import User from '../models/user'
import authHelper from '../helpers/auth.helper'


export default function Register(){

    let navigate = useNavigate()

    const names = useRef()
    const lastnames = useRef()
    const email = useRef();
    const pass = useRef();

    const signUp = async () => {
        let form = new URLSearchParams()
        form.append('names', names.current.value)
        form.append('lastnames', lastnames.current.value)
        form.append('email', email.current.value)
        form.append('password', pass.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL + 'auth/register',form,{
            header:{'Accept': 'application/json'}
        } )
        if (data.data.token) {
            await authHelper.setToken(data.data.token)
            let userData = data.data.user
            let user = new User(userData._id, userData.name, userData.email )
            console.log(user)
            navigate('/entrenador')
        } else {
            console.log("nou")
        }
    }
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
