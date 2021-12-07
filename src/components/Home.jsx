import React, {Component} from "react";
import ContentMain from "./ContentMain";
import ContainerHorUbi from "./ContainerHorUbi";
import Entrenadores from "./Entrenadores";
import '../assets/css/home.css';


class Home extends Component{

    render(){
        return(
            <div className="home">
                <ContentMain/>
                <ContainerHorUbi/>
                <Entrenadores/>
            </div>

        )

    }
}
export default Home;