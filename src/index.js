import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ToggleButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOn: true};  
  }

  buttonClick = () => {
      this.setState(prevState => ({
        isOn: !prevState.isOn
      }
    ));
  }

  render(){
    return(
      <button className="ToggleButton" onClick = {this.buttonClick}>
        {this.state.isOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(  
  <ToggleButton />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
