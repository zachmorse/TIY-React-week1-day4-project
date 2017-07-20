import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="card">
        <h3>What is your name, pilot?</h3>
        <form className="form" onSubmit={this.props.setPilot}>
          <input
            type="text"
            placeholder="enter your name"
            onKeyUp={this.props.inputAction}
            name="TempPilot"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="btn"
            disabled={!this.props.tempPilot}
          />
          <h3>
            {this.props.pilot}
          </h3>
        </form>
      </div>
    );
  }
}

export default Form;
