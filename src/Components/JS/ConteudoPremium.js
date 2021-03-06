import React, { Component } from "react";
import "../Css/style-ConteudoPremium.css"

class ConteudoPremium extends Component{
    render(){
        const titulo =(props)=>{
            return(
                <>{props.titulo}</>
            );
        }
        
        const preco =(props)=>{
            return(
                <>{props.preco}</>
            );
        } 

        const linha1 =(props)=>{
            return(
                <>{props.linha1}</>
            );
        }

        const linha2 =(props)=>{
            return(
                <>{props.linha2}</>
            );
        }

        const linha3 =(props)=>{
            return(
                <>{props.linha3}</>
            );
        }

        const linha4 =(props)=>{
            return(
                <>{props.linha4}</>
            );
        }

        const linha5 =(props)=>{
            return(
                <>{props.linha5}</>
            );
        }

        const linha6 =(props)=>{
            return(
                <>{props.linha6}</>
            );
        }

        const linha7 =(props)=>{
            return(
                <>{props.linha7}</>
            );
        }

        const linha8 =(props)=>{
            return(
                <>{props.linha8}</>
            );
        }

        const linha9 =(props)=>{
            return(
                <>{props.linha9}</>
            );
        }

        const linha10 =(props)=>{
            return(
                <>{props.linha10}</>
            );
        }

        const linha11 =(props)=>{
            return(
                <>{props.linha11}</>
            );
        }

        const linha12 =(props)=>{
            return(
                <>{props.linha12}</>
            );
        }

        return(
            <div className="main">
                <div className="BotoesInfos">
                    <span className="FalseButton">1 mês grátis ao assinar</span>
                    <span className="FalseButtonTwo">Pagamento único disponível</span>
                </div>
                 <h3>{this.props.titulo}</h3>

                 <p>{this.props.preco}</p>
                 
                 <div className="line"></div>
                 <ul>
                     <tr className="linhas">
                     {this.props.linha1}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha2}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha3}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha4}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha5}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha6}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha7}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha8}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha9}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha10}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha11}
                     </tr>
                     <tr className="linhas">
                     {this.props.linha12}
                     </tr>
                 </ul>

                 <div className="footer">
                     <button className="botao">COMEÇAR</button>
                     <p className="TextFooter">
                         <a href="https://www.spotify.com/br/legal/premium-promotional-offer-terms/" className="TextFooter">Sujeito a Termos e Condições.</a> O mês grátis não está disponível para usuários que já experimentaram o Premium.
                                     </p>
                 </div>

            </div>//main
        );
    }
}
export default ConteudoPremium;