import React from 'react'
import EstadoFavorito from './EstadoFavorito';

class Form extends React.Component {

  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      estadoFavorito : '',
      nome: '',
      idade: 0, 
      email: '',
      vaiComparecer: false,
    }
  }

  handleChange ({target}) { // como se fosse addEventListener
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <h1> Fazendo aquela convenção maravilhosa!</h1>

        <form className='form'>

          <EstadoFavorito value={this.state.estadoFavorito}
          handleChange = {this.handleChange} />

          <label>
            Email
            <input name='email'
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          </label>
          <br/>

          <label>
            Nome
            <input
            name='nome'
            type="text"
            value={this.state.nome}
            onChange={this.handleChange} />
          </label>
          <br/>

          <label>
            Idade
            <input
            name='idade'
            type='number'
            value={this.state.idade}
            onChange={this.handleChange}
            />
          </label>
          <br/>
          <label>
            Vai comparecer a reunião?
            <input 
            name='vaiComparecer'
            type='checkbox'
            value={this.state.vaiComparecer}
            onChange={this.handleChange} />
          </label>
          <br/>

        </form>
      </div>
    );
  }

}

export default Form;