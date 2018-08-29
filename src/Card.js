import React, { Component } from 'react';
import './Card.css';

import {connect} from 'react-redux'

class Card extends Component {
  handleClick=()=>{
    this.props.selectCard(this.props.card)
  }
  render() {
    return (
      <div className="Card" onClick={this.handleClick}>
        <h4>{this.props.card.number}</h4>
        <p>{this.props.card.suite}</p>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(Card);
