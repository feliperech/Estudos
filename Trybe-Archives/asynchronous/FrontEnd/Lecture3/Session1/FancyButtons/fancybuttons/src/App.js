import React from 'react';
import './App.css';




class App extends React.Component {
  HandleClickOne(){
    console.clear();
    console.log('Você clicou no primeiro botão!');
    this.setState((estadoAnterior, _props) => ({ // underline apresenta que esse parametro foi passado mas não sera usado.
      numeroCliques1: estadoAnterior.numeroCliques1 +1
    }));
  }
  
  HandleClickTwo(){
    console.clear();
    console.log('Você clicou no segundo botão!');
    this.setState((estadoAnterior, _props) => ({
      numeroCliques2: estadoAnterior.numeroCliques2 +1
    }));
  }
  
  HandleClickThree(){
    console.clear();
    console.log('Você clicou no terceiro botão!');
    this.setState((estadoAnterior, _props) => ({
      numeroCliques3 : estadoAnterior.numeroCliques3 +1
    }));
  }

  constructor () { // chama o constructor para dentro do app extends, permitindo que se tenha controle do this
    super(); // Importando o super, tem-se acesso ao this.
    this.HandleClickOne = this.HandleClickOne.bind(this); // permite-se utilizar o this com a func
    this.HandleClickTwo = this.HandleClickTwo.bind(this);
    this.HandleClickThree = this.HandleClickThree.bind(this); 

    this.state = { // acessa o state para atualizar o estado.
      numeroCliques1 : 0, 
      numeroCliques2 : 0,
      numeroCliques3 : 0,
    }
  }
  render () {
    
    return (
      <>
        <button onClick = {this.HandleClickOne}>{this.state.numeroCliques1}</button>
        <button onClick = {this.HandleClickTwo}>{this.state.numeroCliques2}</button>
        <button onClick = {this.HandleClickThree}>{this.state.numeroCliques3}</button>
      </>
    );
  }
}

export default App;
