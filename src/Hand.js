import React, { Component } from 'react';
import './Hand.css';
import Card from './Card'
import {connect} from 'react-redux'
import {setHand} from './Redux/actions'


class Hand extends Component {
  handleClick=()=>{
    // console.log(this.props.store.selectedCard)
    let newHand=this.props.store.hand.map((card)=>{
      return card
    })
    if (this.props.store.selectedCard.suite===true){
      newHand.push(this.props.store.selectedCard)
      this.props.dispatch(setHand(newHand))
      console.log(this.props.store.hand)
    }
  }
  render() {
    let keyCounter=0
    let playerHand=this.props.store.hand.map((card)=>{
      keyCounter++
      return <Card card={card} key={keyCounter}/>
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
