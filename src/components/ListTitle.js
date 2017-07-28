import React, { Component } from 'react'

export default class ListTitle extends Component {
  constructor(props) {
    super(props)
    this.state = { editing: props.value.length == 0 }
    this.toogleState = this.toogleState.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteList = this.deleteList.bind(this)
  }

  deleteList() {
    this.props.onDelete(this.props.id)
  }

  handleChange(e) {
    this.setState({ title: e.target.value })
  }

  saveChanges() {
    if(this.state.title.length > 0) {
      this.props.onTitleChange(this.props.id, this.state.title)
    }
    this.toogleState()
  }

  toogleState() {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    const { value } = this.props

    let title
    if (this.state.editing) {
      title = <input className="fixed-input" defaultValue={value} onChange={ this.handleChange } />
    } else {
      title = <div className="todo-title">{value}</div>
    }

    let switchButton
    if (this.state.editing) {
      switchButton = <a className="glyphicon glyphicon-ok btn-list" href="#" onClick={this.saveChanges} />
    } else {
      switchButton = <a className="glyphicon glyphicon-edit btn-list" href="#" onClick={this.toogleState} />
    }

    return (
      <div className="nav-bar">
        <div className="nav-bar-blue">
          <div className="calendar glyphicon glyphicon-calendar" />
          <div className="editable-input">{title}</div>
          <div className="editable-del">
            {switchButton}
            |
            <a className="glyphicon glyphicon-trash btn-list" href="#" onClick={this.deleteList} />
          </div>
        </div>
      </div>
    )
  }
}
