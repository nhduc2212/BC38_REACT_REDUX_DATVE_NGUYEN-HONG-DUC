import React, { Component } from 'react';
import './Info_input.css';
import { connect } from 'react-redux';

 class Info_input extends Component {
  
  render() {
    const {nameOfClient, dispatch}= this.props;
    return (
        <div className='info-input'>
        <div className='name-input input'>
            <h3>Name:</h3>
            <input placeholder="Please input your name" id='clientName'/>
        </div>
        <div className='warning' id='name-warning'></div>
        <button className='btn-confirm name-confirm' onClick={()=>{dispatch ({
          type:"INPUT_NAME",
          payload: `${document.getElementById('clientName').value}`
        })}}>Confirm your info</button>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    nameOfClient: state.clientInfoReducer
  }
}

export default connect(mapStateToProps, null)(Info_input)
