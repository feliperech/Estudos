import React, {Component} from 'react' // importa React e Component para criar a class component
import UserInfo from './UserInfo';
import UserName from './UserName';
import data from './Data';

class Table extends Component {
  render() {
    return (
      <div>
       <UserName name = {data.joao.name}/>
       <br/>
       <UserInfo email= {data.joao.email} id = {data.joao.id} />
      </div>
    );
  }
}


export default Table;