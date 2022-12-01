import React from 'react'

class Form extends React.Component {

  constructor () {
    super();
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.state = {
      estadoFavorito : '',
      nome: '',
      idade: 0, 
      email: '',
      vaiComparecer: false,
    }
  }

  handleTextAreaChange ({target}) { // como se fosse addEventListener
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
          <label>
            Diga seu Estado favorito do Brasil!
            <textarea
             name='estadoFavorito' 
             value={this.state.estadoFavorito}
             onChange ={this.handleTextAreaChange} />
          </label>
          <br/>

          <label>
            Email
            <input name='email'
            type="email"
            value={this.state.email}
            onChange={this.handleTextAreaChange}
          />
          </label>
          <br/>

          <label>
            Nome
            <input
            name='nome'
            type="text"
            value={this.state.nome}
            onChange={this.handleTextAreaChange} />
          </label>
          <br/>

          <label>
            Idade
            <input
            name='idade'
            type='number'
            value={this.state.idade}
            onChange={this.handleTextAreaChange}
            />
          </label>
          <br/>
          <label>
            Vai comparecer a reunião?
            <input 
            name='vaiComparecer'
            type='checkbox'
            value={this.state.vaiComparecer}
            onChange={this.handleTextAreaChange} />
          </label>
          <br/>

        </form>
      </div>
    );
  }

}

export default Form;