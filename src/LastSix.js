import React, { Component } from 'react';
import './LastSix.css';
// import Card from './Card'
import {connect} from 'react-redux'

class LastSix extends Component {
  // handleClick=()=>{
  //   console.log("Hand")
  // }
  render() {
    return (
      <div className="LastSix">
        Hi There
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
