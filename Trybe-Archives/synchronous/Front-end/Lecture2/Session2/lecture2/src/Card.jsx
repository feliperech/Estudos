import React from "react";

class Card extends React.Component {

    render (){
        return (
            <div className="Card">
                <div className="Card-Image">
                    <img src="teste" alt="teste"></img>
                </div>   
                <div className="Card-body">
                    <h1> Título </h1>
                    <p>
                        <span> Ano de lançamento</span>
                        <span> Genero </span>

                    </p>
                    <p className="starts"> Classificação </p>

                </div>
            </div>
        )
    }
}

export default Card;