import React, { Component } from 'react'
import './Review_zone.css'
import { connect } from 'react-redux'

class Review_zone extends Component {
  
  render() {
    const {selectedList, client_name, totalPrice}=this.props;
    return (
        <div className='review-zone'>
<h3>Your booking info: </h3>
<div className='name-displayer'>
<h3>Client Name: {client_name}</h3></div>
<div className='seat-displayer'>
  <h3>Your seats: {selectedList.length}</h3>
  {selectedList.map((item) => {
              return (
                <div
                  className= "seat selected review"
                >{item.soGhe}

                </div>
              );
            })}
            <h3>Total: {totalPrice}</h3>
</div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {return {
  selectedList: state.seatReducer.selectedSeatList,
  client_name: state.clientInfoReducer.nameOfClient,
  totalPrice: state.seatReducer.total
}}

export default connect (mapStateToProps, null)(Review_zone)
