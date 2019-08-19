export const addTodo = (id, todo) => {
  return {
    type: 'ADD_TODO',
    payload: { id, todo, 'done': false }
  }  
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}

export const setTodoAsDone = (id) => {
  return {
    type: 'DONE_TODO',
    payload: id
  }
}

export const setTodoAsNotDone = (id) => {
  return {
    type: 'NOT_DONE_TOOD',
    payload: id

  }
}
