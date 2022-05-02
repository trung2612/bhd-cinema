import React, { Component } from "react";
import SeatPicker from "react-seat-picker";
import "../BookingScreen.scss";

export default class App extends Component {
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.props.setSelected(prev=> {return [...prev,id]});
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.props.setSelected((list) => list.filter((item) => item !== id));
    const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    removeCb(row, number, newTooltip);
  };

  render() {
    if(this.props.row&&!!this.props.row.length) return (
      <div>
        <h1>Seat Picker</h1>
        <div style={{ marginTop: "10px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={this.props.row}
            maxReservableSeats={100}
            alpha
            visible
            selectedByDefault
            loading={false}
            tooltipProps={{ multiline: true }}
          />
        </div>
      </div>
    );
  }
}
