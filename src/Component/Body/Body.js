import React, { Component } from 'react';
import './Body.css';
import Info_input from './Info-input/Info_input';
import Seat_Panel from './seat-panel/Seat_Panel';
import Review_zone from './review-zone/Review_zone';
import {connect}from "react-redux";

 class Body extends Component {
  render() {
    const{selectedList, dispatch, client_name}=this.props
    return (
      <div className='body-container'>
         
<div className='functional-zone'>
    <Info_input/>
    <Seat_Panel/>
    <Review_zone/>
    <button className='btn-confirm' onClick={selectedList.length==0?()=>{document.getElementById('info-warning').innerHTML=("Please choose your seat")}:client_name==""?()=>{document.getElementById('info-warning').innerHTML=("Please fill in your name")}:()=>{alert("transferring to payment page"); window.location.reload()}
  }>Confirm your booking</button>
  <div className='warning' id='info-warning'></div>
</div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    client_name: state.clientInfoReducer.nameOfClient,
    seatPanel: state.seatReducer,
    selectedList: state.seatReducer.selectedSeatList,
  };
};

export default connect(mapStateToProps ,null)(Body);