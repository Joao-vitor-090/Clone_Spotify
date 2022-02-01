import React, { Component } from "react";
import Logo from '../img/logo.png';
import "../Css/style-Navbar.css";
import menu from"../img/menu.png";
class Navbar extends Component{
    render(){
        function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
        return(
            
            <div className="Navbar">

                <div className="imagem">

                    <img src = {Logo} className="Logo" />

                </div>
                
                <span className="links">
                    <a href="#">Premium</a>
                    <a href="#">Suporte</a>
                    <a href="#">Baixar</a>

                    <span className="separador">|</span>

                    <a href="#">Inscreva-se</a>
                    <a href="#">Entrar</a>
            </span>

            <div id="mySidenav"className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                    <a href="#">Premium</a>
                    <a href="#">Suporte</a>
                    <a href="#">Baixar</a>
                    <a href="#">Inscreva-se</a>
                    <a href="#">Entrar</a>
            </div>
            <div className="main">
            <span  onclick="openNav()" className="funcaojs">&#9776; open</span>

</div>
           </div>
           
        );
    }
}
export default Navbar;