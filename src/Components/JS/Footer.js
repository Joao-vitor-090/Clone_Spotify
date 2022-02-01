import React, { Component } from 'react';
import logowhite from "../img/logo_white.png";
import '../Css/style-Footer.css'
import instagram from "../img/Insta.png"
import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"

class Footer extends Component {
    render(){
        return(
            <div className='Container-Footer'>
                <div className='logowhite'>
                    <img src = {logowhite} className='logo'></img>
                </div>
                <div className='colunas'> 
                
                        <div className='Coluna_tabela'>

                            <p className='linhas_footer_titulo'>EMPRESA</p>
                            <p  className='linhas_footer'>Sobre</p>
                            <p  className='linhas_footer'>Empregos</p>
                            <p  className='linhas_footer'>For the Record</p>
   
                        </div>
                        <div className='Coluna2_tabela'>

                            <p className='linhas_footer_titulo'>COMUNIDADE</p>
                            <p  className='linhas_footer'>Para Artistas</p>
                            <p  className='linhas_footer'>Desenvolvedores</p>
                            <p  className='linhas_footer'>Publicidade</p>
                            <p  className='linhas_footer'>Investodores</p>
                            <p  className='linhas_footer'>Fornecedores</p>

                        </div>
                        <div className='Coluna3_tabela'>

                            <p className='linhas_footer_titulo'>LINKS ÚTEIS</p>
                            <p  className='linhas_footer'>Suporte</p>
                            <p  className='linhas_footer'>Player da Web</p>
                            <p  className='linhas_footer'>Aplicativo móvel grátis</p>

                        </div>

                    <div className='RedesSociais_footer'>

                        <div className='Socialcontainer'>
                        <img src = {instagram} className='imgredeSocial'></img>
                        </div>

                        <div className='Socialcontainer'>
                            <img src = {twitter}  className='imgredeSocial'></img>
                        </div>

                        <div className='Socialcontainer'>
                            <img src = {facebook}  className='imgredeSocial'></img>
                        </div>

                    </div>

                </div>
                <div className='baixo_footer'>

                    <div className='links_politicas'>
                        <a className='links_politica' href='#'>legal</a>
                        <a className='links_politica' href='#'>Centro de Privacidade</a>
                        <a className='links_politica' href='#'>Política de privacidade</a>
                        <a className='links_politica' href='#'>Cookies</a>
                        <a className='links_politica' href='#'>Sobre anúnicios</a>

                    </div>

                    <div className='Marca_brasil'>
                        <p>Brasil</p>
                        <a className='link_spotify'href='#'>© 2022 Spotify AB</a>

                    </div>

                </div>
            </div>
        );
    }
};
export default Footer;