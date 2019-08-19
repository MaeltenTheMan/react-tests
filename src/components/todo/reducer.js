const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return ({ ...state, 'todos': [...state.todos, action.payload] })

    case 'DELETE_TODO':
      const reducedTodos = state.todos.filter(item => item.id !== action.payload)
      return ({ ...state, 'todos': reducedTodos })  
    
    case 'DONE_TODO':
      const todosWithDone = state.todos.map(item => { 
        if (item.id === action.payload) {
          item.done = true
        } 
        return item
      })
      return ({ ...state, 'todos': todosWithDone })

    case 'NOT_DONE_TODO':
      console.log('hallo?')
      const todosWithoutDone = state.todos.map(item => { 
        console.log(item)
        if (item.id === action.payload) {
          item.done = false
        } 
        console.log('item', item)
        return item
      })
      return ({ ...state, 'todos': todosWithoutDone })

    default: 
      return state
  }
}
