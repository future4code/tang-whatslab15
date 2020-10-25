import React from 'react';


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
  if(event.keyCode === 13) {
    event.target.click();
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
  
}

apagarMensagem = (mensagensEnviadas) => {
  console.log(mensagensEnviadas)

  /*const novaListaDeMensagens = this.state.mensagensEnviadas.filter((mensagem) =>{
    return mensagemId !== mensagem.id;
  })

  this.setState({mensagensEnviadas: novaListaDeMensagens})**/

}


render() {

  return (
    <div className="App">
    
    <div className="AreaDeMensagem"> 
      {this.state.mensagensEnviadas.map((dado) => { 
            
            return <div key={dado.id}>
                      <div><span className="UserName">{dado.autor}: </span> <span>{dado.conteudo}</span></div>
                      <button onClick={this.apagarMensagem}></button>
                      <br/>

                    </div>
            
            })}
    </div>

    <div className="Form">
        
        

        <input className="user" placeholder="Usuário" value={this.state.usuario} onChange={this.onChangeUsuario} />

        <input className="message" placeholder="Mensagem" value={this.state.mensagem} onChange={this.onChangeMensagem} />

        <button className="enviar" onClick={this.enviarNovaMensagem} onKeyUp={this.apertouEnter}>Enviar</button>

    </div>

    </div>
  );

}
}

export default App;
