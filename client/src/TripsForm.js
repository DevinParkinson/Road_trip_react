import React from 'react';

class TripForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTrip(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Trip"
          required
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
      </form>
    )
  }
}

export default TripForm;
