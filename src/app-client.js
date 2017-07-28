import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'

import App from './components/App'

let stubbedStore = {
  lists: [
    {id: 1, title: "List 1", tasksIds: [0]},
    {id: 2, title: "List 2", tasksIds: [1]}
  ],
  tasks: [
    { id: 1, description: "Task 1", completed: true },
    { id: 2, description: "Task 2", completed: false }
  ]
}

let store = createStore(reducers, stubbedStore)
window.store = store;

window.onload = () => {
  render(<Provider store={store}><App/></Provider>, document.getElementById('main'))
}
