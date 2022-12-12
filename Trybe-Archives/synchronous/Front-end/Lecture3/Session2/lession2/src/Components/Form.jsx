import React, { Component } from 'react'

export default class Form extends Component {

  
 
  render() {
    const {
      name,
      number,
      expiry,
      cvc,
      isDisable,
      handleChange,
      handleFocus,
      handleSubmit,
    } = this.props ;
    
    return (
      <form onSubmit={handleSubmit} > {/* O onSubmit serve como enter e onClick */}
        <label htmlFor='name-input'>
          Escreva o nome <br />
          <input 
            type="text" /* Define o tipo de entrada do input */
            id="name-input"
            name="name"
            value={name}
            onChange={ handleChange } /* Usar o this para passar o handleChange */
            onFocus = {handleFocus}
          />
        </label>
        <br />
        <label htmlFor='number-input'>
          Escreva o número <br />
          <input 
            type="text"
            id="number-input"
            name="number"
            value={number}
            onChange={ handleChange } /* Usar o this para passar o handleChange */
            onFocus = {handleFocus}
          />
        </label>
        <br />
        <label htmlFor='expiry-input'>
          Escreva a data de validade <br />
          <input
           type="text"
           id="expiry-input"
           name="expiry"
           value={expiry}
           onChange={ handleChange } /* Usar o this para passar o handleChange */
           onFocus = {handleFocus}
          />       
        </label>
        <br />
        <label htmlFor='cvc-input'>
          Escreva o CVC <br />
          <input
           type="text"
           id="cvc-input"
           name="cvc" 
           value={cvc}
           onChange={ handleChange } /* Usar o this para passar o handleChange */
           onFocus = {handleFocus}
          />       
        </label>
        <br />
        <button
          disabled={isDisable}
          
        > Cadastre </button>
      </form>
    )
  }
}
