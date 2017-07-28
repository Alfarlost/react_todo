const list = (state = {}, action) => {
  switch(action.type) {
  case 'ADD_LIST':
    return {
      id: action.id,
      title: action.title,
      tasksIds: []
    }
  case 'RENAME_LIST':
    if (state.id != action.id) {
      return state
    }

    return Object.assign({}, state, {
      title: action.title,
    })
  case 'ADD_TASK':
    if (state.id != action.listId) {
      return state
    }

    return Object.assign({}, state, {
      tasksIds: [
        ...state.tasksIds,
        action.id
      ]
    })
  default:
    return state
  }
}

const lists = (state = [], action) => {
  switch(action.type) {
  case 'ADD_LIST':
    return [
        ...state,
        list(undefined, action)
      ]
  case 'RENAME_LIST':
    return state.map(l => list(l, action))
  case 'DELETE_LIST':
    return state.filter(l => l.id != action.id)
  case 'ADD_TASK':
    return state.map(l => list(l, action)) 
  default:   
    return state
  }
}

export default lists
