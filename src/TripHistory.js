import "./styles.css";
import React, { Component } from "react";

// Import from the made up trips.js to simulate the behaviour.
import { trips } from "./trips";

// Create a new component to display all the trips entered by a user.
// It should display the names of the trip, the travelled distance,
// and the saved CO2 for each individual trip.

class TripHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tripHistoryList = this.props.tripHistoryList;
    // The table takes the data of the trips as input and maps it so that
    // it is displayed in the right column.
    // Source for CO2 factor: https://www.nimblefins.co.uk/average-co2-emissions-car-uk
    return (
      <div>
        <p> See the trip history: </p>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Distance</th>
              <th>CO2 savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First trip</td>
              <td>20 km</td>
              <td>{20 * 138.4} g</td>
            </tr>
            {tripHistoryList.map((t) => (
              <tr key={t.tid}>
                <td>{t.tname}</td>
                <td>
                  {t.distance} {t.unit}
                </td>
                {t.unit === "m" && <td>{(t.distance * 138.4) / 1000} g</td>}
                {t.unit === "km" && <td>{t.distance * 138.4} g</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    // The factor for the CO2 emissions stays the same.
    // Thereby it can be avoided to save the data in the database.
    // For now it is only calculated on rendering. We could change that to make achievements easier.
  }
}

export default TripHistory;
