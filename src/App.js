import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wppost from './components/Wppost';
//import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

   state = {
    title: "sdddd",
    date: "",
    content: {}
  };



render() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Wppost mypost={this.state.title}/>
      
    </div>
  )
   
}

}

export default App;
