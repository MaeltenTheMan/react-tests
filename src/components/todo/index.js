import React, { Fragment, useState } from 'react'
import { addTodo, deleteTodo, setTodoAsDone, setTodoAsNotDone } from './actions.js'
import { useSelector, useDispatch } from 'react-redux'
import './todos.css'

const Todo = (props) => {
  const state = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [actualInput, setActualInput] = useState('')

  const handleInput = (e) => {
    setActualInput(e.target.value)
  }

  const TodoList = () => {
    return state.todos.map(item => {
      return (
        <div className='card' key={item.id}>
          <button onClick={() => deleteTodoDispatcher(item.id)} className='delete-button'>x</button>
          <label className={item.done ? 'done-todo' : ''} onClick={() => doneTodoDispatcher(item)} >{item.todo}</label>
        </div>
      )
    })
  }

  const addTodoDispatcher = () => {
    const timeStamp = new Date().getTime() 
    dispatch(addTodo(timeStamp, actualInput))
    setActualInput('')
  }

  const deleteTodoDispatcher = (id) => {
    dispatch(deleteTodo(id))
  }

  const doneTodoDispatcher = (todo) => {
    if (todo.done) {
      dispatch(setTodoAsNotDone(todo.id))
    } else {
      dispatch(setTodoAsDone(todo.id))
    }
  }

  return (
    <Fragment>
      <h1>
        Todoliste
      </h1>
      <div >
        <input type='text' value={actualInput} onChange={handleInput} />
        <button onClick={addTodoDispatcher}>
          Add
        </button>
      </div> 
      <div>
      <TodoList />  
      </div>   
    </Fragment>
  )
} 

export default Todo 
