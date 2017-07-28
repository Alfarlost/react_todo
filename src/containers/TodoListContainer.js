import { connect } from 'react-redux'
import { addTask, renameList, deleteList } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state, props) => {
  return {
    tasks: state.tasks.filter(task => { return props.tasksIds.includes(task.id) })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (id, title) => {
      dispatch(renameList(id, title))
    },
    onDeleteList: (id) => {
      dispatch(deleteList(id))
    },
    onAddTask: (listId, description) => {
      dispatch(addTask(listId, description))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
