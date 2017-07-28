import React from 'react'
import TodoItem from './TodoItem'
import ListTitle from './ListTitle'
import AddTaskBlock from './AddTaskBlock'
import TaskContainer from '../containers/TaskContainer'

const TodoList = ({ id, title, tasks, onAddTask, onDeleteList, onTitleChange }) => (
  <div className="container-nav">
    <div className="row">
      <div className="span-all">
        <ListTitle
          id={id}
          value={title}
          onDelete={onDeleteList}
          onTitleChange={onTitleChange}
         />
        <div className="tasks-block">
          <AddTaskBlock listId={id} addTask={onAddTask} />
          <ul className="sortarable">
            {
              tasks.map(task =>
                <TaskContainer key={task.id} {...task} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default TodoList
