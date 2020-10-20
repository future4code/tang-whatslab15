import React from 'react';
import Form from './components/form';
import './App.css';


export class App extends React.Component {
  
  render() {
  
    return (
      <div className="App">

          <div className="area-de-mensagem">
            <p>PlaceHolder</p>
          </div>

          <Form />

      </div>
    );

  }
}

export default App;
