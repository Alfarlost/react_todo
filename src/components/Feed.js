import React from 'react'
import TodoListContainer from '../containers/TodoListContainer'
import AddItemButton from './AddItemButton'

const Feed = ( { lists } ) => (
  <div className="outer">
    <div className="headertext">
      <h2><b> SIMPLE TODO LISTS </b></h2>
    </div>
    {
      lists.map(list =>
        <TodoListContainer
          key={list.id}
          {...list}
        />
      )
    }
    <AddItemButton />
  </div>
)

export default Feed
