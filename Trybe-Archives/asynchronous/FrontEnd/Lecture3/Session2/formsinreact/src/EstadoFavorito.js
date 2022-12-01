import React, { Component } from 'react'


class EstadoFavorito extends Component {
  render() {
  let error = undefined;
    const {value,handleChange} = this.props


  if (value.length > 120){ 
    error = 'texto muito grande';
  }

    return (
        <label> 
            Diga seu Estado favorito do Brasil!
            <textarea
             name='estadoFavorito' 
             value={value}
             onChange ={handleChange} />
            <span>{error ? error : ''}</span>
          </label>
          
        )
  }
}

export default EstadoFavorito;