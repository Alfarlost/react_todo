import React from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions'

let AddItemButton = ({ dispatch }) => {
  return (
    <div>
      <button className="addlist" onClick={ () => dispatch(addList()) } />
    </div>
  )
}

AddItemButton = connect()(AddItemButton)

export default AddItemButton
