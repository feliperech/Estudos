import React, { Component } from 'react'

export class cardJuice extends Component {
  render() {
    const { Juice } = this.props;
    return (
      <div>
        <h2> {`O nome do suco é ${Juice.name}`}</h2>
      </div>
    )
  }
}

export default cardJuice