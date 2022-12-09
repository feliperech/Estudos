import React from 'react'
import './App.css';
import Card from 'react-credit-cards-2'
import Header from './Components/Header';
import 'react-credit-cards-2/es/styles-compiled.css';
import Form from './Components/Form';

class App extends React.Component {
  state = {
    name: 'Digite aqui',
    number: '',
    expiry: '',
    cvc: '',
    focous: '',
  }

  handleChange = ({ target }) => { /* O target serve para obter o campo/valor digitado no input */
    const {name, value } = target; /* O value é parte da desestruturação do target (target.value) */
    this.setState({
      [name]: value, /* target.name -> indica que usa o name do input / target.value dá o valor digitado */
    });
  } //usar sempre arrow function, senão precisa usar bind

  handleFocus = ({target}) => {
    const {name} = target;
    this.setState({
      focus: name,
    })
  };

  render () {
    const {
      name,
      number,
      expiry,
      cvc,
      focus,
    } = this.state;

    return (
      <>
        <Header />
        <main>
          <section>
            <Form 
             {...this.state} // espalha todo o state para dentro do formulário (Spread Operator)
              handleChange = {this.handleChange} // passa a função handleChange para o forms
              handleFocus = {this.handleFocus}
            />
          </section>
          <section>
            <Card 
              name={name}
              number={number}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
