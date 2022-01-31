import React, { Component } from "react";
import "../Css/style-Desconto.css"

class Desconto extends Component{
    render(){
        return(
            <div className="Desconto-footer">
                <div className="texto1">
                    <p>Desconto especial para estudantes</p>
                    <p>universitários elegíveis.</p>
                </div>
                <div className="texto2">Saiba mais</div>
            </div>
        );
    }
};
export default Desconto;
