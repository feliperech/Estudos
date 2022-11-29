import React from 'react';
import './App.css';


function HandleClickOne(){
  console.clear();
  console.log('Você clicou no primeiro botão!');
}

function HandleClickTwo(){
  console.clear();
  console.log('Você clicou no segundo botão!');
}

function HandleClickThree(){
  console.clear();
  console.log('Você clicou no terceiro botão!');
}

class App extends React.Component {
  render () {
    
    return (
      <>
        <button onClick = {HandleClickOne}>Primeiro Botão</button>
        <button onClick = {HandleClickTwo}>Segundo Botão</button>
        <button onClick = {HandleClickThree}>Terceiro Botão</button>
      </>
    );
  }
}

export default App;
