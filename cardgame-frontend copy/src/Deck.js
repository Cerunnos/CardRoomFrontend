import React, { Component } from 'react';
import './Deck.css';

import {connect} from 'react-redux'

class Deck extends Component {
  handleClick=()=>{
    this.props.drawCard()
  }
  render() {
    return (
      <div className="Deck" onClick={this.handleClick}>
        <p>Deck</p>
        {this.props.store.deck.length}
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(Deck);
