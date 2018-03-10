import React, { Component } from 'react';
import Trips from './Trips';
import Locations from './Locations';
import TripList from './TripList.js';
import TripsForm from './TripsForm.js';
import axios from 'axios';

class App extends Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => {
        this.setState({ trips: res.data })
      })
  }

  addTrip = (name) => {
    let trip = { name }
      axios.post('/api/trips', trip)
      .then( res => {
        this.setState({ trips: [res.data, ...this.state.trips]})
          })
  }

  updateTrip = (id, name) => {
    let trip = { name }
    axios.put(`/api/trips/${id}`, trip)
      .then( res => {
        let trips = this.state.trips.map( t => {
          if (t.id === id)
            return res.data
          return t
        })
      this.setState({ trips });
      })
  }

  deleteTrip = (id) => {
    const { trips } = this.state;
    axios.delete(`/api/trips/${id}`)
      .then( res => {
    this.setState({ trips: trips.filter(t => t.id !== id)})
    })
  }

  render() {
    return (
    <div className="container">
      <TripsForm
        addTrip={this.addTrip}
        />
      <Trips />
      <TripList
        trips={this.state.trips}
        updateTrip={this.updateTrip}
        deleteTrip={this.deleteTrip}
        />
    </div>
    );
  }
}

export default App;
