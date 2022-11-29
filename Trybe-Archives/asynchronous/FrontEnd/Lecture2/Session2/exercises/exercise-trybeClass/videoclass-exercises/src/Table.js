import React, {Component} from 'react' // importa React e Component para criar a class component
import UserInfo from './UserInfo';
import UserName from './UserName';
import data from './Data';

class Table extends Component {
  render() {
    return (
      data.map( users => (
        <div>
        <UserName name = {users.name}/>
        <br/>
        <UserInfo email= {users.email} id = {users.id}  />
       </div>
      )));
  }
}


export default Table;