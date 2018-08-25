import React, { Component } from 'react';
import Deck from './Deck.js'

import './App.css'

class TableTop extends Component {
  render() {
    return (
      <div className="Background">
        <Deck/>
      </div>
    );
  }
}

export default TableTop;
