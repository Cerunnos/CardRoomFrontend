import React, { Component } from 'react';
import './Discard.css';

import {connect} from 'react-redux'

class Discard extends Component {
  handleClick=()=>{
    console.log("Discard")
  }
  render() {
    return (
      <div className="Discard" onClick={this.handleClick}>
        <p>Discard</p>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    store: state
  };
};

export default connect(mapStateToProps)(Discard);
