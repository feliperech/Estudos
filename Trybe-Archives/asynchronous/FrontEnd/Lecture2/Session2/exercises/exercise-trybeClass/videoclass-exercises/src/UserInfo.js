import React from "react";


class UserInfo extends React.Component {

  render () {
    const ids = this.props.id;
    const email = this.props.email; // ou const {ids, email} = this.props
    return (
      <span>{email} {ids}</span>
    )
  }
}

export default UserInfo; 