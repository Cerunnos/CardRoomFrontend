import React, { Component } from 'react';
import Deck from './Deck.js'

import './App.css'

class TableTop extends Component {
  state={
    deck:[],
    discard:[],
    hand:[]
  }

  createDeck=()=>{
    let deckLength=60
    let newDeck=[]
    for (let i=0;i<60;i++){
      let alteredDeck=this.state.deck
      let powerLevel=(1+Math.floor(Math.random()*6))
      let cardInfo={number:i,power:powerLevel}
      newDeck.push(cardInfo)
    }
    shuffleDeck(newDeck)
    this.props.dispatch(setDeck(newDeck))
  }


  drawCard=()=>{
    let altDeck=this.props.store.deck.map((card)=>{
      return card
    })
    let altHand=this.props.store.hand.map((card)=>{
      return card
    })
    let topCard=altDeck.shift()
    let handSet=[...altHand,topCard]
    console.log(handSet)
    this.props.dispatch(setHand(handSet))
    this.props.dispatch(setDeck(altDeck))
  }

  componentDidMount(){
    this.createDeck()
  }
  render() {
    return (
      <div className="Background">
        <Deck/>
      </div>
    );
  }
}

export default TableTop;
