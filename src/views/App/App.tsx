import React, { Component } from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
