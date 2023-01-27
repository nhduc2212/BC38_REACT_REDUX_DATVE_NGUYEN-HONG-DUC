import React, { Component } from "react";
import { connect } from "react-redux";
import "./Seat_Panel.css";

class Seat_Panel extends Component {
  seatList = [
    {
      hang: "",
      danhSachGhe: [
        { soGhe: "1", gia: 0 },
        { soGhe: "2", gia: 0 },
        { soGhe: "3", gia: 0 },
        { soGhe: "4", gia: 0 },
        { soGhe: "5", gia: 0 },
        { soGhe: "6", gia: 0 },
        { soGhe: "7", gia: 0 },
        { soGhe: "8", gia: 0 },
        { soGhe: "9", gia: 0 },
        { soGhe: "10", gia: 0 },
        { soGhe: "11", gia: 0 },
        { soGhe: "12", gia: 0 },
      ],
    },
    {
      hang: "A",
      danhSachGhe: [
        { soGhe: "A1", gia: 75000, daDat: false },
        { soGhe: "A2", gia: 75000, daDat: false },
        { soGhe: "A3", gia: 75000, daDat: false },
        { soGhe: "A4", gia: 75000, daDat: false },
        { soGhe: "A5", gia: 75000, daDat: false },
        { soGhe: "A6", gia: 75000, daDat: false },
        { soGhe: "A7", gia: 75000, daDat: false },
        { soGhe: "A8", gia: 75000, daDat: false },
        { soGhe: "A9", gia: 75000, daDat: false },
        { soGhe: "A10", gia: 75000, daDat: false },
        { soGhe: "A11", gia: 0, daDat: true },
        { soGhe: "A12", gia: 0, daDat: true },
      ],
    },
    {
      hang: "B",
      danhSachGhe: [
        { soGhe: "B1", gia: 75000, daDat: false },
        { soGhe: "B2", gia: 75000, daDat: false },
        { soGhe: "B3", gia: 75000, daDat: false },
        { soGhe: "B4", gia: 75000, daDat: false },
        { soGhe: "B5", gia: 75000, daDat: false },
        { soGhe: "B6", gia: 75000, daDat: false },
        { soGhe: "B7", gia: 75000, daDat: false },
        { soGhe: "B8", gia: 75000, daDat: false },
        { soGhe: "B9", gia: 75000, daDat: false },
        { soGhe: "B10", gia: 75000, daDat: false },
        { soGhe: "B11", gia: 75000, daDat: false },
        { soGhe: "B12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "C",
      danhSachGhe: [
        { soGhe: "C1", gia: 75000, daDat: false },
        { soGhe: "C2", gia: 75000, daDat: false },
        { soGhe: "C3", gia: 75000, daDat: false },
        { soGhe: "C4", gia: 75000, daDat: false },
        { soGhe: "C5", gia: 75000, daDat: false },
        { soGhe: "C6", gia: 75000, daDat: false },
        { soGhe: "C7", gia: 75000, daDat: false },
        { soGhe: "C8", gia: 75000, daDat: false },
        { soGhe: "C9", gia: 75000, daDat: false },
        { soGhe: "C10", gia: 75000, daDat: false },
        { soGhe: "C11", gia: 75000, daDat: false },
        { soGhe: "C12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "D",
      danhSachGhe: [
        { soGhe: "D1", gia: 75000, daDat: false },
        { soGhe: "D2", gia: 75000, daDat: false },
        { soGhe: "D3", gia: 75000, daDat: false },
        { soGhe: "D4", gia: 75000, daDat: false },
        { soGhe: "D5", gia: 75000, daDat: false },
        { soGhe: "D6", gia: 75000, daDat: false },
        { soGhe: "D7", gia: 75000, daDat: false },
        { soGhe: "D8", gia: 75000, daDat: false },
        { soGhe: "D9", gia: 75000, daDat: false },
        { soGhe: "D10", gia: 75000, daDat: false },
        { soGhe: "D11", gia: 75000, daDat: false },
        { soGhe: "D12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "E",
      danhSachGhe: [
        { soGhe: "E1", gia: 75000, daDat: false },
        { soGhe: "E2", gia: 75000, daDat: false },
        { soGhe: "E3", gia: 75000, daDat: false },
        { soGhe: "E4", gia: 75000, daDat: false },
        { soGhe: "E5", gia: 75000, daDat: false },
        { soGhe: "E6", gia: 75000, daDat: false },
        { soGhe: "E7", gia: 75000, daDat: false },
        { soGhe: "E8", gia: 75000, daDat: false },
        { soGhe: "E9", gia: 75000, daDat: false },
        { soGhe: "E10", gia: 75000, daDat: false },
        { soGhe: "E11", gia: 75000, daDat: false },
        { soGhe: "E12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "F",
      danhSachGhe: [
        { soGhe: "F1", gia: 75000, daDat: false },
        { soGhe: "F2", gia: 75000, daDat: false },
        { soGhe: "F3", gia: 75000, daDat: false },
        { soGhe: "F4", gia: 75000, daDat: false },
        { soGhe: "F5", gia: 75000, daDat: false },
        { soGhe: "F6", gia: 75000, daDat: false },
        { soGhe: "F7", gia: 75000, daDat: false },
        { soGhe: "F8", gia: 75000, daDat: false },
        { soGhe: "F9", gia: 75000, daDat: false },
        { soGhe: "F10", gia: 75000, daDat: false },
        { soGhe: "F11", gia: 75000, daDat: false },
        { soGhe: "F12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "G",
      danhSachGhe: [
        { soGhe: "G1", gia: 75000, daDat: false },
        { soGhe: "G2", gia: 75000, daDat: false },
        { soGhe: "G3", gia: 75000, daDat: false },
        { soGhe: "G4", gia: 75000, daDat: false },
        { soGhe: "G5", gia: 75000, daDat: false },
        { soGhe: "G6", gia: 75000, daDat: false },
        { soGhe: "G7", gia: 75000, daDat: false },
        { soGhe: "G8", gia: 75000, daDat: false },
        { soGhe: "G9", gia: 75000, daDat: false },
        { soGhe: "G10", gia: 75000, daDat: false },
        { soGhe: "G11", gia: 75000, daDat: false },
        { soGhe: "G12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "H",
      danhSachGhe: [
        { soGhe: "H1", gia: 75000, daDat: false },
        { soGhe: "H2", gia: 75000, daDat: false },
        { soGhe: "H3", gia: 75000, daDat: false },
        { soGhe: "H4", gia: 75000, daDat: false },
        { soGhe: "H5", gia: 75000, daDat: false },
        { soGhe: "H6", gia: 75000, daDat: false },
        { soGhe: "H7", gia: 75000, daDat: false },
        { soGhe: "H8", gia: 75000, daDat: false },
        { soGhe: "H9", gia: 75000, daDat: false },
        { soGhe: "H10", gia: 75000, daDat: false },
        { soGhe: "H11", gia: 75000, daDat: false },
        { soGhe: "H12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "I",
      danhSachGhe: [
        { soGhe: "I1", gia: 75000, daDat: false },
        { soGhe: "I2", gia: 75000, daDat: false },
        { soGhe: "I3", gia: 75000, daDat: false },
        { soGhe: "I4", gia: 75000, daDat: false },
        { soGhe: "I5", gia: 75000, daDat: false },
        { soGhe: "I6", gia: 75000, daDat: false },
        { soGhe: "I7", gia: 75000, daDat: false },
        { soGhe: "I8", gia: 75000, daDat: false },
        { soGhe: "I9", gia: 75000, daDat: false },
        { soGhe: "I10", gia: 75000, daDat: false },
        { soGhe: "I11", gia: 75000, daDat: false },
        { soGhe: "I12", gia: 75000, daDat: false },
      ],
    },
    {
      hang: "J",
      danhSachGhe: [
        { soGhe: "J1", gia: 75000, daDat: false },
        { soGhe: "J2", gia: 75000, daDat: false },
        { soGhe: "J3", gia: 75000, daDat: false },
        { soGhe: "J4", gia: 75000, daDat: false },
        { soGhe: "J5", gia: 75000, daDat: false },
        { soGhe: "J6", gia: 75000, daDat: false },
        { soGhe: "J7", gia: 75000, daDat: false },
        { soGhe: "J8", gia: 75000, daDat: false },
        { soGhe: "J9", gia: 75000, daDat: false },
        { soGhe: "J10", gia: 75000, daDat: false },
        { soGhe: "J11", gia: 75000, daDat: false },
        { soGhe: "J12", gia: 75000, daDat: false },
      ],
    },
  ];
  render() {
    const { selectedList, dispatch } = this.props;
    return (
      <div className="seat-position-selections">
        <div className="legends">
          <div className="legend available-legend">
            <div className="seat available"></div>
            <small>Available</small>
          </div>
          <div className="legend unavailable-legend">
            <div className="seat unavailable"></div>
            <small>Not available</small>
          </div>
          <div className="legend selected-legend">
            <div className="seat selected"></div>
            <small>Selected</small>
          </div>
        </div>
        <div className="screen">
          <h2 className="screen-position">Screen this way</h2>
        </div>
        <div className="seat_area">
          {/* -----------col-indicator------------- */}
          <div className="seat_row">
            <div className="row-indicator"></div>
            {this.seatList[0].danhSachGhe.map((item) => {
              return (
                <div className="column-indicator" key={item.soGhe}>
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* ----------A-------------- */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[1].hang}</div>
            {this.seatList[1].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={
                    item.daDat !== true
                      ? () => {
                          dispatch({
                            type: "SELECT_SEAT",
                            payload: item,
                          }),
                            console.log(item, selectedList);
                        }
                      : () => {
                          return 0, console.log(item, selectedList);
                        }
                  }
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* ----------B-------------- */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[2].hang}</div>
            {this.seatList[2].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() => {
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),
                      console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* ------------C------------ */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[3].hang}</div>
            {this.seatList[3].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* ------------D------------ */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[4].hang}</div>
            {this.seatList[4].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* -------------E----------- */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[5].hang}</div>
            {this.seatList[5].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* -----------F------------- */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[6].hang}</div>
            {this.seatList[6].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* ------------G------------ */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[7].hang}</div>
            {this.seatList[7].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* -----------H------------- */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[8].hang}</div>
            {this.seatList[8].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* -----------I------------- */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[9].hang}</div>
            {this.seatList[9].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
          {/* -----------J------------- */}
          <div className="seat_row">
            <div className="row-indicator">{this.seatList[10].hang}</div>
            {this.seatList[10].danhSachGhe.map((item) => {
              return (
                <div
                  className={item.daDat == true ? "seat unavailable" : "seat"}
                  onClick={() =>{
                    dispatch({
                      type: "SELECT_SEAT",
                      payload: item,
                    }),console.log(item, selectedList), document.getElementById(`${item.soGhe}`).classList.toggle('selected')
                  }}
                  key={item.soGhe} id={item.soGhe}
                >
                  {item.soGhe}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatPanel: state.seatReducer,
    selectedList: state.seatReducer.selectedSeatList,
  };
};



export default connect(mapStateToProps, null)(Seat_Panel);
