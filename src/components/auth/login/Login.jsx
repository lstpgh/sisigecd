import axios from "axios";
import React, { useRef } from "react";
import { useNavigate, Navigate } from 'react-router-dom'
import User from '../../../models/user'
import authHelper from '../../../helpers/auth.helper'
import '../../../assets/css/login.css';

export default function Login(){

    let navigate = useNavigate()

    const email = useRef();
    const pass = useRef();

    const signIn = async () => {
        let form = new URLSearchParams()
        form.append('email', email.current.value)
        form.append('password', pass.current.value)
        console.log('https://lolita18.herokuapp.com/')
        const data = await axios.post('https://lolita18.herokuapp.com/auth/login',form,{
            header:{'Accept': 'application/json'}
        } )
        await authHelper.setToken(data.data.token)
        // let userData = data.data.user
        // let user = new User(userData._id, userData.name, userData.email )
        console.log(data)
        navigate('/entrenador')
    }

    return (
        !authHelper.getToken() ?
        <div className="login">
            <h2>Inicio de sesión</h2>
            <label htmlFor="email">E-Mail</label>
            <input ref={email} type="email" name="" id="email" />
            <label htmlFor="pass">Contraseña</label>
            <input ref={pass} type="password" name="" id="pass" />
            <button onClick={signIn} type="submit" id="btn_ingreso">Ingresar</button>
        </div>:
        <Navigate to={'/entrenador'}/>
    )
}