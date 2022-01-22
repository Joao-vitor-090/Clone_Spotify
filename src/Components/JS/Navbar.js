import React, { Component } from "react";

class Navbar extends Component{
    render(){
        const nome = 'joao';
        return(
            <h1>
                Olá meu nome é {nome}, prazer  !
            </h1>
        );
    }
}
export default Navbar;