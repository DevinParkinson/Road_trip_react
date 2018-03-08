import React, { Component } from 'react';
import Trips from './Trips'
import Locations from './Locations'

class App extends Component {
  state = { view: 'Trips' }

  componentDidmount() {
    //make call to server to get Trips
  }

  addTrip = (name) => {
      const { trips } = this.state;
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    this.setState({ trips: [...trips, { id, name }] });
  }

  updateTrip = (id) => {
    let trips = this.state.trips.map( t => {
      if ( t.id === id )
      return t;
    })
    this.setState({ trips });
  }

  deleteTrip = (id) => {
    const { trips } = this.state;
    this.setState({ trips: trips.filter(t => t.id !== id)
    })
  }


  toggleView = (view) => {
    this.setState({ view })
  }

  show = () => {
    switch (this.state.view) {
      case 'Trips':
      return <Trips />
      case 'Locations':
      return <Locations />
    }
  }

  render() {
<<<<<<< HEAD
    <div>
      { ['Trips', 'Location'].map( view => {
          <button key={view} onClick={() => toggleView(view) }>{view}</button>
        })
      }
      { this.show() }
    </div>
=======
    return (
      
      <div>

        
      </div>
    );
>>>>>>> fix database tables
  }
}

export default App;
