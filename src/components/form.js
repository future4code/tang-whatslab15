import React from 'react';

import './styles/form.css';


export class Form extends React.Component {
  

    state = {
        usuario: "",
        mensagem: ""
    }

    onChangeUsuario = (event) => {
        this.setState({usuario: event.target.value});
        //Apenas para testar se funcionou
        //console.log(this.state.usuario);
    }

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value});       
    }

    render() {
    
      return (
        <div className="Form">
            
            <input className="user" placeholder="Usuário" value={this.state.usuario} onChange={this.onChangeUsuario} />

            <input className="message" placeholder="Mensagem" value={this.state.mensagem} onChange={this.onChangeMensagem} />

            <button className="enviar">Enviar</button>

        </div>
      );
  
    }
  }
  
  export default Form;
