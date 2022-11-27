/* eslint-disable react/require-render-return */
import React from 'react'; // Importa a aplicação React

class Image extends React.Component { // Cria a classe image como sendo um componente React

  render (){ // cria a renderização
    const {source, alternativeText} = this.props; // desestrutura as props como uma const.
    return <img src={source} alt = {alternativeText} />; // Retorna a imagem com as props passadas.
  }

}


export default Image;

// Perguntas e Respostas; 

// 1 - Qual o nome do componente declarado acima? -- R: image.


