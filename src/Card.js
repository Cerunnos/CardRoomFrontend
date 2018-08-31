import React, { Component } from 'react';
import './Card.css';
import {setSelectedCard} from './Redux/actions'


import {connect} from 'react-redux'

class Card extends Component {
  handleClick=()=>{
    console.log(this.props.store.selectedCard)
    this.props.dispatch(setSelectedCard(this.props.card))
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
