import React from 'react';
import Enviar from './pics/enviar.png'
import Enviadas from './Enviadas';

import './App.css';


export class App extends React.Component {
  
  state = {
    usuario: "",
    mensagem: "",
    mensagensEnviadas: [],

}


onChangeUsuario = (event) => {
    this.setState({usuario: event.target.value});

    
    //Apenas para testar se funcionou
    //console.log(this.state.usuario);
}


onChangeMensagem = (event) => {
    this.setState({mensagem: event.target.value});       
}

apertouEnter = (event) => {
  console.log(event.keyCode);
  if(event.keyCode === 13) {
    this.enviarNovaMensagem();
  }
}

enviarNovaMensagem = () => {
  //console.log("Mensagem enviada", this.state.mensagem);
  const novaMensagem = {
    id: Date.now(),
    autor: this.state.usuario,
    conteudo: this.state.mensagem
  }
  
  const novaListaDeMensagens = [...this.state.mensagensEnviadas, novaMensagem];

  this.setState({mensagensEnviadas: novaListaDeMensagens});
  this.setState({mensagem: ''})
}

apagarMensagem = (mensagemEsp) => {
  console.log(mensagemEsp )

  /*const novaListaDeMensagens = this.state.mensagensEnviadas.filter((mensagem) =>{
    return mensagemId !== mensagem.id;
  })

  this.setState({mensagensEnviadas: novaListaDeMensagens})**/

}



render() {

  return (
    <div className="App">
    
    <div className="AreaDeMensagem"> 

      <Enviadas arrayMensagens={this.state.mensagensEnviadas} apagar={this.apagarMensagem} /> 

     </div>

    <div className="Form">
        
        <input className="user" placeholder="Usuário" value={this.state.usuario} onChange={this.onChangeUsuario} />

        <input className="message" placeholder="Mensagem" value={this.state.mensagem} onChange={this.onChangeMensagem} onKeyUp={this.apertouEnter} />

        <button className="enviar" onClick={this.enviarNovaMensagem} > <img src={Enviar} /></button>

    </div>

    </div>
  );

}
}

export default App;
