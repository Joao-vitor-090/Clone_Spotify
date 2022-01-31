import React, { Component } from "react";
import "./Components/Css/style-App.css"
import ConteudoPremium from "./Components/JS/ConteudoPremium";
import Desconto from "./Components/JS/Desconto";
import Footer from "./Components/JS/Footer";

import Navbar from "./Components/JS/Navbar";
import PagPremium from "./Components/JS/PagPremium";

class App extends Component {
  render() {

    let titulo = [
      'Básico', 
      'Individual',
      'Duo',
      'Família'
    ];

    const linha = [
      '🗸 Curta música sem anúncios',//0 

    '🗸 Escolha a música que quer ouvir',//1 

    '🗸 Ouça em qualquer lugar — até no modo offline (até 10.000 músicas)',//2

     '🗸 Somente para um dispositivo móvel', //3

     '🗸 Escute em qualquer dispositivo', //4

     '🗸Faça um plano pré-pago ou uma assinatura',//5

     '🗸  2 contas Premium para um casal que mora junto',//6

     '🗸  Duo Mix: uma playlist só pra vocês, atualizada',//7

     '🗸  6 contas Premium para familiares que moram no mesmo endereço',//8

     '🗸  Family Mix: uma playlist pra família, atualizada regularmente com músicas que todo mundo gosta',//9

     '🗸  Bloqueie músicas com conteúdo explícito',//10

     '🗸  Spotify Kids: um aplicativo separado, feito especialmente para crianças'
     //11

    ];

    return (
    <div className="App">
      <Navbar/>
      <PagPremium />
      <div className="Pagamentos">
        <h1>Escolha seu plano</h1>
        <p>Ouça sem limites no seu celular, alto-falante e em outros dispositivos.</p>
      </div>
      
      <div className="Container">

        <ConteudoPremium 
         titulo = {titulo [0]} //basico
         preco = 'R$ 14,90/mês após o período da oferta'
         linha1 = {linha [0]}
         linha2 = {linha [1]}
         linha3 = {linha [2]}
         linha4 = {linha [3]}
         >
         </ConteudoPremium>

          <ConteudoPremium 
         titulo = {titulo [1]}//individual
         preco = 'R$ 19,90/mês após o período da oferta'
         linha1 = {linha [0]}
         linha2 = {linha [2]}
         linha3 = {linha [1]}
         linha4 = {linha [4]}
         linha5 = {linha [5]}
         >
         </ConteudoPremium>
          <ConteudoPremium 
         titulo = {titulo [2]}//duo
         preco = 'R$ 14,90/mês após o período da oferta'
         linha1 = {linha [6]}
         linha2 = {linha [7]}
         linha3 = {linha [0]}
         linha4 = {linha [3]}
         linha5 = {linha [2]}
         linha6 = {linha [1]}
         linha7 = {linha [4]}
         linha8 = {linha [5]}
         >
         </ConteudoPremium>
          
        <ConteudoPremium
         titulo = {titulo [3]}//familia
         preco = 'R$ 14,90/mês após o período da oferta'
         linha1 = {linha [8]}
         linha2 = {linha [9]}
         linha3 = {linha [10]}
         linha4 = {linha [0]}
         linha5 = {linha [2]}
         linha6 = {linha [1]}
         linha7 = {linha [4]}
         linha8 = {linha [11]}
         linha9 = {linha [5]}
         >
         </ConteudoPremium>
      </div>
      <div className="block">
        <Desconto></Desconto>
      </div>
      <div className="blockFooter">

      <Footer
      ></Footer>

      </div>
    </div>
  );
}
}
export default App;
