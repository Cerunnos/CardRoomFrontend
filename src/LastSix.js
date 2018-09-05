import React, { Component } from 'react';
import './LastSix.css';
import Card from './Card'
import {connect} from 'react-redux'
import {setPlayer1LastSix} from './Redux/actions'


class LastSix extends Component {
  state={
    position1:{},
    position2:{},
    position3:{}
  }

  handlePosition1=()=>{
    let altLastSix=Object.assign({},this.props.store.player1LastSix)
    altLastSix.pos1=this.props.store.selectedCard
    this.props.dispatch(setPlayer1LastSix(altLastSix))
  }

  handlePosition2=()=>{
    let altLastSix=Object.assign({},this.props.store.player1LastSix)
    altLastSix.pos2=this.props.store.selectedCard
    this.props.dispatch(setPlayer1LastSix(altLastSix))
  }

  handlePosition3=()=>{
    let altLastSix=Object.assign({},this.props.store.player1LastSix)
    altLastSix.pos3=this.props.store.selectedCard
    this.props.dispatch(setPlayer1LastSix(altLastSix))
  }
  render() {
    return (
      <div className="container">
        <div className="grid-item" onClick={this.handlePosition1}>
          <Card card={this.props.store.player1LastSix.pos1}/>
        </div>
        <div className="grid-item" onClick={this.handlePosition2}>
          <Card card={this.props.store.player1LastSix.pos2}/>
        </div>
        <div className="grid-item" onClick={this.handlePosition3}>
          <Card card={this.props.store.player1LastSix.pos3}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(LastSix);
