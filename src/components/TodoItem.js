import React, { Component } from 'react'
import classNames from 'classnames/bind';

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = { editing: false, description: this.props.description }
    this.toogleState = this.toogleState.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  deleteTask() {
    this.props.onTaskDelete(this.props.id)
  }

  handleChange(e) {
    this.setState({ description: e.target.value })
  }

  saveChanges() {
    if(this.state.description.length > 0) {
      this.props.onTaskRename(this.props.id, this.state.description)
    }
    this.toogleState()
  }

  toogleState() {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    const { description, completed, onTaskToogle } = this.props
    let descriptionInput
    if (this.state.editing) {
      descriptionInput = <input className="fixed-input task_edit" defaultValue={description} onChange={ this.handleChange } />
    } else {
      descriptionInput = <div className="task-description">{description}</div>
    }

    let switchButton
    if (this.state.editing) {
      switchButton = <a className="glyphicon glyphicon-ok btn-task" href="#" onClick={this.saveChanges} />
    } else {
      switchButton = <a className="glyphicon glyphicon-edit btn-task" href="#" onClick={this.toogleState} />
    }

    let descriptionClass = classNames({
      "body": true,
      "completed": completed
    })

    return (
      <li>
        <input type="checkbox"
          className="check"
          checked={ completed }
          onClick={ onTaskToogle } />
        <div className={ descriptionClass }>
          <strong>
            <div className="task-description">
              { descriptionInput }
            </div>
          </strong>
        </div>
        <div className="control">
          { switchButton }
          |
          <a className="glyphicon glyphicon-trash btn-task" href="#" onClick={this.deleteTask} />
        </div>
      </li>
    )
  }
}
