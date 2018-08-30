import React, { Component } from 'react';
import Deck from './Deck'
import Hand from './Hand'
import Discard from './Discard'
import LastSix from './LastSix'
import shuffleDeck from './HelperMethods/ShuffleDeck'
import './Background.css';

import {connect} from 'react-redux'
import {setDeck,setHand} from './Redux/actions'

class Background extends Component {
  state={
    deck:[],
    discard:[],
    hand:[],
    selectedCard:null
  }

  createDeck=()=>{
    let newDeck=[]
    for (let i=0;i<13;i++){
      let cardSpade={}
      let cardClub={}
      let cardDiamond={}
      let cardHeart={}
      if (i+1===1){
        cardSpade={number:"Ace",suite:"of Spades"}
        cardClub={number:"Ace",suite:"of Clubs"}
        cardDiamond={number:"Ace",suite:"of Diamonds"}
        cardHeart={number:"Ace",suite:"of Hearts"}
      }
      else if (i+1===11){
        cardSpade={number:"Jack",suite:"of Spades"}
        cardClub={number:"Jack",suite:"of Clubs"}
        cardDiamond={number:"Jack",suite:"of Diamonds"}
        cardHeart={number:"Jack",suite:"of Hearts"}
      }
      else if (i+1===12){
        cardSpade={number:"Queen",suite:"of Spades"}
        cardClub={number:"Queen",suite:"of Clubs"}
        cardDiamond={number:"Queen",suite:"of Diamonds"}
        cardHeart={number:"Queen",suite:"of Hearts"}
      }
      else if (i+1===13){
        cardSpade={number:"King",suite:"of Spades"}
        cardClub={number:"King",suite:"of Clubs"}
        cardDiamond={number:"King",suite:"of Diamonds"}
        cardHeart={number:"King",suite:"of Hearts"}
      }else{
        cardSpade={number:i+1,suite:"of Spades"}
        cardClub={number:i+1,suite:"of Clubs"}
        cardDiamond={number:i+1,suite:"of Diamonds"}
        cardHeart={number:i+1,suite:"of Hearts"}
      }
      newDeck.push(cardSpade)
      newDeck.push(cardClub)
      newDeck.push(cardDiamond)
      newDeck.push(cardHeart)
    }
    shuffleDeck(newDeck)
    this.props.dispatch(setDeck(newDeck))
  }

  selectCard=(card)=>{
    this.setState({
      selectedCard:card
    },()=>console.log(this.state.selectedCard))
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
        <Hand selectCard={this.selectCard}/>
        <LastSix/>
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
