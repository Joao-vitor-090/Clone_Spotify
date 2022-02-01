import React, { Component } from "react";
import Logo from '../img/logo.png';
import "../Css/style-Navbar.css";
import menu from"../img/menu.png";
class Navbar extends Component{
    render(){
        return(
            
            <div className="Navbar">

                <div className="imagem">

                    <img src = {Logo} className="Logo" />

                </div>
                
                <span className="links">
                <img src = {menu} className="menuNavbar" />
                    <a href="#">Premium</a>
                    <a href="#">Suporte</a>
                    <a href="#">Baixar</a>

                    <span className="separador">|</span>

                    <a href="#">Inscreva-se</a>
                    <a href="#">Entrar</a>

                </span>
                
           </div>
           
        );
    }
}
export default Navbar;