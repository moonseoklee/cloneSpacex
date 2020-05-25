import React, { Component } from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';

const LAUNCHES_QUERY = gql`
query LauncheQuer($flight_number: Int!) {
  launch(flight_number: $flight_number) {
    flight_number
    mission_name
    launch_year
    launch_success
    launch_date_local
    launch_success

  }
}
`;

export class Launch extends Component {
    render() {
        return (
            <div>
                <h1>Launch</h1>
            </div>
        )
    }
}

export default Launch
