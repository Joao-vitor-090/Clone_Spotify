import React, { Component } from "react";
import "../Css/style-PagPremium.css"

class PagPremium extends Component{
    render(){
        return(
            <div className="PagPremium">
                <div className="blocoLetra">
                    <h1>Aproveite 1 mês grátis de premium</h1>
                </div>
                <div className="blocoLetra">
                <p className="preco">Depois,pague somente 19,90 Cancele quando quiser.</p>
                </div>
                <div className="bloco">
                    <button className="botao1">
                        COMEÇAR
                        </button>
                    <button className="botao2">
                        VER PLANOS
                        </button>
                </div>
                    <div className="blocoLetra">
                        <p className="descricao"><a href="#" className="descricao">Sujetio a termos e Condições.</a> O mês grátis não está disponível para usuários que já experimentaram o Premium.</p>
                    </div>
            </div>
        ); 
    }
};
export default PagPremium;