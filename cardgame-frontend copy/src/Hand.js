import React, { Component } from 'react';
import './Hand.css';

import Card from './Card'

import {connect} from 'react-redux'

class Hand extends Component {
  // handleClick=()=>{
  //   console.log("Hand")
  // }
  render() {
    let playerHand=this.props.store.hand.map((card)=>{
      return <Card card={card}/>
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
