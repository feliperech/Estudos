import './App.css';
import React from 'react';
import juices from './data'
import CardJuice from './components/CardJuice';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Que suco foi esse? </h1> 
        <ul>
          {juices.map((element) => (
            <CardJuice key={juices.hex} juices = {element} />
          ))};
        </ul>
      </div>
    );
  }
}

export default App;
