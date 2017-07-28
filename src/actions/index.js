let listId = 3
export const addList = (title) => {
  return {
    id: listId++,
    type: "ADD_LIST",
    title: "New List"
  }
}

export const renameList = (id, title) => {
  return {
    id: id,
    type: "RENAME_LIST",
    title: title
  }
}

export const deleteList = (id) => {
  return {
    id: id,
    type: "DELETE_LIST"
  }
}

let taskId = 3
export const addTask = (listId, description) => {
  return {
    id: taskId++,
    listId: listId,
    type: "ADD_TASK",
    description: description
  }
}

export const toogleTask = (id) => {
  return {
    id: id,
    type: "TOOGLE_TASK"
  }
}

export const renameTask = (id, description) => {
  return {
    id: id,
    type: "RENAME_TASK",
    description: description
  }
}

export const deleteTask = (id, list_id) => {
  return {
    id: id,
    type: "DELETE_TASK"
  }
}

