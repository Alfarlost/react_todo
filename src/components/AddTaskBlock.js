import React, { Component } from 'react'

export default class AddTaskBlock extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.description) { 
      this.props.addTask(this.props.listId, this.state.description)
      this.setState({ description: '' })
    }
  }

  handleChange(e) {
    this.setState({ description: e.target.value })
  }

  render() {
    return(
      <div className="nav-bar">
        <div className="nav-bar-gray editnav">
          <form className="nav-bar-form" onSubmit={ this.handleSubmit }>
            <input className="form-control fixed-input input_task"
                  value={ this.state.description }
                  placeholder="Start typing here to create task..."
                  required="true"
                  onChange={ this.handleChange }/>
            <button className="btn-add" type="submit">Add Task</button>
          </form>
        </div>
      </div>
    )
  }
}
