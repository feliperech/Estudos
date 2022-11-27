import logo from './logo.svg';
import './App.css'; //importa o CSS do ./App - Tela inicial
import Image from './image'; // Importa o componente Imagem
import catzinho from './catzinho.jpg' // Importa o gatinho fofo 

function App() { // Função de App
  return ( // Retorno da função 
    <main> {/* Cria um bloco, necessário para inserir um componente */}
      <Image source = {catzinho} alternativeText = {'Cute cat component'} /> {/* Chama o componente com os parâmetros previamente passados */}
    </main>
  );
}

export default App; /* Faz o export do App.js */
