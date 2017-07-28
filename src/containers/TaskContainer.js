import { connect } from 'react-redux'
import { toogleTask, deleteTask, renameTask } from '../actions'
import TodoItem from '../components/TodoItem'

const mapStateToProps = (state, props) => {
  return {
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    onTaskToogle: () => {
      dispatch(toogleTask(props.id))
    },
    onTaskDelete: (id) => {
      dispatch(deleteTask(id))
    },
    onTaskRename: (id, description) =>  {
      dispatch(renameTask(id, description))
    }
  }
}

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)

export default TaskContainer
