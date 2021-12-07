import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/auth/login/Login';
import ErrorPage from './components/ErrorPage';
import Register from "./components/Register";
import Footer from './components/Footer';
import VistaEntrenador from "./components/VistaEntrenador";

class Rutas extends Component{

    render(){
        return(
            
            <Router>
                <Header/>
            <div className="center">
            {/*configurar rutas y paginas*/}
            <Routes>
                <Route exact path="/" element={<Home />}/>  
                <Route exact path="/login" element={<Login />}/>  
                <Route exact path="/register" element={<Register />}/> 
                <Route exact path="/entrenador" element={<VistaEntrenador />}/> 
                
                <Route path="*" element={<ErrorPage />}/>
                
           </Routes>
           <div className= "clearFix"></div>
           </div>
                <Footer/>
           </Router>

        );

    }
}
export default Rutas;