const task = (state = {}, action) => {
  switch(action.type) {
  case 'ADD_TASK':
    return {
      id: action.id,
      description: action.description,
      completed: action.completed
    }
  case 'RENAME_TASK':
    return Object.assign({}, state, {
      description: action.description
    })
  case 'TOOGLE_TASK':
    if (state.id != action.id) {
      return state
    }

    return Object.assign({}, state, {
      completed: !state.completed
    })
  default:
    return state
  }
}

const tasks = (state = [], action) => {
  switch(action.type) {
  case 'ADD_TASK':
    return [
      ...state,
      task(undefined, action)
    ]
  case 'TOOGLE_TASK':
    return state.map(t => task(t, action))
  case 'RENAME_TASK':
    return state.map(t => task(t, action))
  case 'DELETE_TASK':
    return state.filter(t => t.id != action.id)
  default:
    return state
  }
}

export default tasks
