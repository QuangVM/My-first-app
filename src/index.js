import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function UserInfo(props){
//   return(
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Name: {props.email}</p>
//     </div>
//   );
// }

class UserInfo extends React.Component {
  render(){
    return(
      <div>
        <div>
          <p>Name: {this.props.name}</p>
          <p>Email:{this.props.email}</p>
        </div>
        <div>
          Other Information: {this.props}
        </div>
      </div>
    );
  }
}

const element = <UserInfo name = 'Quang' email = '07quang@gmail.com'/>

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
