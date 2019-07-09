import React, { Component } from 'react';

class TaskForm extends Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name)
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          required
          placeholder='add a task here'
          name="name"
          value={this.state.name}
          onChange={this.handleChange}  
        />
      </form>
    )
  }
}

export default TaskForm;