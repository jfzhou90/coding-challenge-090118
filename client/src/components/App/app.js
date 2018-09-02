import React, { Component } from 'react';
import { Header } from '../Header';
import { NewContact } from '../NewContact';
import { DataTable } from '../DataTable';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Header/>
        <NewContact/>
        <DataTable/>
      </div>
    );
  }
}

export default App