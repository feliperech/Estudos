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
    isDisable: true,
    registerCards: [],
  }

  buttonValidation = () => {
    const { cvc, expiry, name } = this.state;
    const validationCVC = cvc.length === 3;
    const validationDate = expiry.length === 4;
    const validationName = /^((?:[A-Za-z]+ ?){1,3})$/.test(name) // regex para nome
    this.setState({
      isDisable: !(validationCVC && validationDate && validationName),
    })
  }

  handleChange = ({ target }) => { /* O target serve para obter o campo/valor digitado no input */
    const { name, value } = target; /* O value é parte da desestruturação do target (target.value) */
    this.setState({
      [name]: value, /* target.name -> indica que usa o name do input / target.value dá o valor digitado */
    }, () => {
      this.buttonValidation(); // pode só passar a ref. da função também
    }); // callback que permite ações em soluções de assincronicidade, visto que setState é assinc.
  } //usar sempre arrow function, senão precisa usar bind

  handleFocus = ({ target }) => {
    const { name } = target;
    this.setState({
      focus: name,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault(); // evita que fique recarregando a página.
    const { name, cvc, expiry, number } = this.state;
    const newCard = { name, cvc, expiry, number };

    this.setState(({ registerCards }) => ({ //obteḿ o registro das cartas antigos
      registerCards: [...registerCards, newCard] // atribui a nova carta para o conjunto de cartas antigos

    })) // é necessário utilizar o valor antigo para incluir.
  }
  render() {
    const {
      name,
      number,
      expiry,
      cvc,
      focus,
      registerCards,
    } = this.state;

    return (
      <>
        <Header />
        <main>
          <section className="principal-css">
            <section>
              <Form
                {...this.state} // espalha todo o state para dentro do formulário (Spread Operator)
                handleChange={this.handleChange} // passa a função handleChange para o forms
                handleFocus={this.handleFocus}
                handleSubmit={this.handleSubmit}
              />
            </section>
            <section className='card-main'>
              <Card
                name={name}
                number={number}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
              />
            </section>
          </section>
          <section className="cards-css">
            {
              registerCards.map(({ name, cvc, expiry, number }) => (
                <Card
                  className="card-content"
                  name={name}
                  number={number}
                  expiry={expiry}
                  cvc={cvc}
                />
              ))
            }
          </section>


        </main>
      </>
    );
  }
}

export default App;
