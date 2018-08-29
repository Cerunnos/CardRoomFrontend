import React, { Component } from 'react';
import './Hand.css';

import Card from './Card'

import {connect} from 'react-redux'

class Hand extends Component {
  // handleClick=()=>{
  //   console.log("Hand")
  // }
  render() {
    let keyCounter=0
    let playerHand=this.props.store.hand.map((card)=>{
      keyCounter++
      return <Card card={card} selectCard={this.props.selectCard} key={keyCounter}/>
    })
    return (
      <div className="Hand" onClick={this.handleClick}>
        {playerHand}
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(Hand);
