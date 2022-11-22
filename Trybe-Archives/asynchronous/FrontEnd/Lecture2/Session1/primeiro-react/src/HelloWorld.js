import React from "react";

class HelloWorld extends React.Component { //criando a classe HelloWorld.  extend imbute componente React na classe
    render(){
        return <span className="HelloWorld"> Hello, World</span>
    }
}


export default HelloWorld //Exporta a classe para ser utilizada em outros lugares.

