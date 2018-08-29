import React, { Component } from 'react';
import Deck from './Deck'
import Hand from './Hand'
import Discard from './Discard'
import shuffleDeck from './HelperMethods/ShuffleDeck'
import './Background.css';

import {connect} from 'react-redux'
import {setDeck,setHand} from './Redux/actions'

class Background extends Component {
  state={
    deck:[],
    discard:[],
    hand:[]
  }

  createDeck=()=>{
    let newDeck=[]
    for (let i=0;i<13;i++){
      let cardSpade={number:i+1,suite:"Spades"}
      let cardClub={number:i+1,suite:"Clubs"}
      let cardDiamond={number:i+1,suite:"Diamonds"}
      let cardHeart={number:i+1,suite:"Hearts"}
      newDeck.push(cardSpade)
      newDeck.push(cardClub)
      newDeck.push(cardDiamond)
      newDeck.push(cardHeart)
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

  math=()=>{

  }

  render() {
    this.math()
    return (
      <div className="Background">
        <Deck drawCard={this.drawCard}/>
        <Discard/>
        <Hand/>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(Background);

// export default Background;
