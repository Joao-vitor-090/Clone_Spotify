import React, { Component } from "react";
import "./Components/Css/style-App.css"
import ConteudoPremium from "./Components/JS/ConteudoPremium";

import Navbar from "./Components/JS/Navbar";
import PagPremium from "./Components/JS/PagPremium";

class App extends Component {
  render() {
    let titulo = 'Básico';
    const linha1 = '🗸 Curta música sem anúncios';
    const linha2 = '🗸 Escolha a música que quer ouvir';
    const linha3 = '🗸 Ouça em qualquer lugar — até no modo offline (até 10.000 músicas)';
    const linha4 = '🗸 Somente para um dispositivo móvel';
    const linha5 = '🗸 Escute em qualquer dispositivo';
    const linha6 = '🗸Faça um plano pré-pago ou uma assinatura';
    const linha7 = '🗸  2 contas Premium para um casal que mora junto';
    const linha8 = '🗸  Duo Mix: uma playlist só pra vocês, atualizada';
    const linha9 = '🗸  6 contas Premium para familiares que moram no mesmo endereço';
    const linha10 = '🗸  Family Mix: uma playlist pra família, atualizada regularmente com músicas que todo mundo gosta';
    const linha11 = '🗸  Bloqueie músicas com conteúdo explícito';
    const linha12 = '🗸  Spotify Kids: um aplicativo separado, feito especialmente para crianças';
    

    return (
    <div className="App">
      <Navbar/>
      <PagPremium />
      <div className="Pagamentos">
        <h1>Escolha seu plano</h1>
        <p>Ouça sem limites no seu celular, alto-falante e em outros dispositivos.</p>
      </div>
      
      <ConteudoPremium className = "Conteudo"
       titulo = {titulo}
       preco = 'R$ 14,90/mês após o período da oferta'
       linha1 = {linha1}
       linha2 = {linha2}
       linha3 = {linha3}
       linha4 = {linha4}
       linha5 = {linha5}
       />
    </div>
  );
}
}
export default App;
