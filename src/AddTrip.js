import "./styles.css";
import React, { Component } from "react";

// Create a new component to display all the trips entered by a user.
// It should display the names of the trip, the travelled distance,
// and the saved CO2 for each individual trip.

class AddTrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // All the properties passed from the main app needd to be specified.
    const enterFun = this.props.enterFun; // Function that saves the entered values on button click.
    const nameDisplayProp = this.props.displayNameFromApp; // Property of the current state of the entered trip name.
    const distDisplayProp = this.props.displayDistFromApp; // Property of the current state of the entered distance.
    const unitDisplayProp = this.props.displayUnitFromApp; // Property of the current state of the entered distance unit.
    const userDisplayProp = this.props.displayUserFromApp; // Property of the current state of the entered distance unit.
    const nameUpdateFun = this.props.changeFun1; // Function that updates the trip name state variable.
    const distUpdateFun = this.props.changeFun2; // Function that updates the distance state variable.
    const unitUpdateFun = this.props.changeFun3; // Function that updates the distance unit state variable.
    const userUpdateFun = this.props.changeFun4; // Function that updates the distance unit state variable.
    return (
      <div>
        <hr />
        <h1>Entry Form</h1>
        <p>Add New Trip Here:</p>

        <div>
          <form onSubmit={enterFun}>
            <input
              type="text"
              placeholder="Trip Name"
              value={nameDisplayProp}
              onChange={nameUpdateFun}
            />
            <input
              type="text"
              placeholder="User Name"
              value={userDisplayProp}
              onChange={userUpdateFun}
            />
            {/* This input is for a positivie number as distance travelled. */}
            <input
              type="number"
              min = "0"
              placeholder="Distance in km"
              value={distDisplayProp}
              onChange={distUpdateFun}
            />
            <select value={unitDisplayProp} onChange={unitUpdateFun}>
              <option> km </option>
              <option> m </option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTrip;
