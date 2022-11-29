import './App.css';

function HandleClick () {
  console.log('Clicou!');
}

function App() {
  return (
    <button onClick ={HandleClick}>Clique aqui!</button>
  );
}

export default App;
