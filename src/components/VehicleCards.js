import React, { Component } from "react";

class VehicleCards extends Component {
  render() {
    let vehicles = this.props.state.vehicles.map(e => {
      return (
        <div className="col-sm-4">
          <div key={e.name} className="card">
            <div className="card-block">
              <h5 className="card-title">
                Vehicle: {e.name}
              </h5>
              <h6 className="card-subtitle text-muted">
                Model: {e.model}
              </h6>
              <br />
              <div className="card">
                <div className="card-block">
                  <h4 className="card-subtitle text-muted">Specs:</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Manufacturer: {e.manufacturer}
                    </li>
                    <li className="list-group-item">
                      Class: {e.vehicle_class}
                    </li>
                    <li className="list-group-item">
                      Passengers: {e.passengers}
                    </li>
                    <li className="list-group-item">
                      Crew: {e.crew}
                    </li>
                    <li className="list-group-item">
                      Length: {e.length}
                    </li>
                    <li className="list-group-item">
                      Max Speed: {e.max_atmosphering_speed}
                    </li>
                    <li className="list-group-item">
                      Cargo Capacity: {e.cargo_capacity}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="row">
        {vehicles}
      </div>
    );
  }
}

export default VehicleCards;
