import './App.css';
import React from 'react';


class App extends React.Component {

  constructor () { // extendida dentro do componente.
    super() // toda a lógica de execução do react será alterada para dentro desse constructor
    this.HandleClick = this.HandleClick.bind(this) // isso permite que seja enxergado o this no render.
    console.log('Abstração nivel hard')
  }
  HandleClick () {
    console.log('Clicou!');
  }
  
  render () {
    console.log(this);
    return (
      <button onClick ={this.HandleClick}>Clique aqui!</button>
    );
  }
}

export default App;
