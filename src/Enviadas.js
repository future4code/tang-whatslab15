import React from 'react';
import Enviar from './pics/enviar.png'

import './App.css';


export class Enviadas extends React.Component {

    render() {

        return(
        <div className="mensagens">    
        {this.props.arrayMensagens.map((dado) => { 
            
            

                

            return <div key={dado.id} className={dado.autor === 'Eu' ? 'mensagemenviada-2' : 'mensagemenviada'} onDoubleClick={this.props.apagar} >
                      
                      
                      
                        <div className="UserName">{dado.autor}:</div> 
                        <div>{dado.conteudo}</div>
                      
                      
                      
                      <br/>

                    </div>
            

            })}
        </div>
        )
    }


}

export default Enviadas;