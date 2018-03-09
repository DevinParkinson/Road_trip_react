import React from 'react'

class Trip extends React.Component {
  state = {
    editing: false,
    name: this.props.name,
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateTrip, id } = this.props;
    updateTrip(id, this.state.name)
    this.setState({ editing: false })
  }

  render() {
    if (this.state.editing) {
      return(
        <div>
          <form
            className="col l4"
            onSubmit={this.handleSubmit}
          >
            <input
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              type="text"
            />
          </form>
          <button
            className="btn"
            onClick={() => this.setState({ editing: false })}
          >Cancel</button>
        </div>
      )
    } else {
      return(
        <div>
          <h1>{this.props.name}</h1>
          <button
            className="btn"
            onClick={() => this.setState({ editing: true })}
          >Edit</button>
          <button
            className="btn"
            onClick={() => this.props.deleteTrip(this.props.id)}
          >Delete</button>
        </div>
      )
    }
  }
}

export default Trip;
