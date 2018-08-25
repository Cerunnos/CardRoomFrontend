import React, { Component } from 'react';
import './Card.css';

import {connect} from 'react-redux'

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h4>Card</h4>
        <p>{this.props.card.power}</p>
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
