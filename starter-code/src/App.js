import React, { Component } from 'react';
import './App.css';
import stock from './data.json'; 
import Search from './Components/Search';
import Table from './Components/Table';

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <Search/>
        <Table stock={stock}/>
      </div>
    );
  }
}

export default App;
