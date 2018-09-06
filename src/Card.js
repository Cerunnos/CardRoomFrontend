import React, { Component } from 'react';
import './Card.css';
import {setSelectedCard, clearSelectedCard, setHand} from './Redux/actions'


import {connect} from 'react-redux'

class Card extends Component {
  handleClick=()=>{
    this.props.dispatch(clearSelectedCard())
    this.props.dispatch(setSelectedCard(this.props.card))
    let newHand=[]
    this.props.store.hand.map((card)=>{
      if ((card.number!==this.props.store.selectedCard.number || card.suite!==this.props.store.selectedCard.suite)){
        newHand.push(card)
      }
    })
    this.props.dispatch(setHand(newHand))
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
