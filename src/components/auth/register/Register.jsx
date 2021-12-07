import axios from "axios";
import React, { useRef } from "react";
import { useNavigate, Navigate } from 'react-router-dom'
import User from '../../../models/user'
import authHelper from '../../../helpers/auth.helper'
import '../../../assets/css/register.css';

export default function Register(){

    let navigate = useNavigate()

    const names = useRef()
    const lastnames = useRef()
    const email = useRef();
    const pass = useRef();

    const signUp = async () => {
        let form = new URLSearchParams()
        form.append('name', names.current.value)
        form.append('email', email.current.value)
        form.append('password', pass.current.value)
        console.log(process.env.REACT_APP_API_URL)
        const data = await axios.post(process.env.REACT_APP_API_URL + 'auth/register',form,{
            header:{'Accept': 'application/json'}
        } )

        alert("usuario creado exitosamente")
        //authHelper.setToken(data.data.token)
        navigate('/')

        }
    

    return (
        !authHelper.getToken() ?
        <div className="form-register">
            <h2>Registro de usuarios</h2>
            <label htmlFor="names">Nombre completo</label>
            <input ref={names} type="text" name="" id="names" />
            <label htmlFor="email">E-Mail</label>
            <input ref={email} type="email" name="" id="email" />
            <label htmlFor="pass">Contraseña</label>
            <input ref={pass} type="password" name="" id="pass" />
            <button onClick={signUp} type="submit" id="btn_ingreso">Ingresar</button>
        </div>:
        <Navigate to={'/entrenador'}/>
    )
}