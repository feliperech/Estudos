import React from "react"; //importa a biblioteca do React

import Card from "./Card";

class HelloWorld extends React.Component {
    render(){
        const nomes = ['José','Felipe', 'Maitê']

        return (
            //Aqui insere-se tudo aquilo que será renderizado.
            <section>
               {nomes.map((element) => (
                    <section>
                    <span> Hello World {element} </span>
                    <Card key={element} />
                    </section>
                ))} 
            </section>
        );
    }
}


export default HelloWorld    //