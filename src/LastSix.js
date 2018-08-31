import React, { Component } from 'react';
import './LastSix.css';
import Card from './Card'
import {connect} from 'react-redux'

class LastSix extends Component {
  state={
    position1:{},
    position2:{},
    position3:{}
  }

  handlePosition1=()=>{
    this.setState({
      position1:this.props.store.selectedCard
    })
  }

  handlePosition2=()=>{
    this.setState({
      position2:this.props.store.selectedCard
    })
  }

  handlePosition3=()=>{
    this.setState({
      position3:this.props.store.selectedCard
    })
  }
  render() {
    return (
      <div className="container">
        <div className="grid-item" onClick={this.handlePosition1}>
          <Card card={this.state.position1}/>
        </div>
        <div className="grid-item" onClick={this.handlePosition2}>
          <Card card={this.state.position2}/>
        </div>
        <div className="grid-item" onClick={this.handlePosition3}>
          <Card card={this.state.position3}/>
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
