import React, { Component } from "react";

class VehicleCards extends Component {
  render() {
    let vehicles = this.props.state.vehicles.map(e => {
      return (
        <div key={e.name}>
          <h1>
            {e.name}
          </h1>
        </div>
      );
    });
    return (
      <div className="card-deck">
        <div className="card">
          <h1>
            {vehicles}
          </h1>
        </div>
      </div>
    );
  }
}

export default VehicleCards;
