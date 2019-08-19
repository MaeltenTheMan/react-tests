import React from 'react'
import './App.css'
import Counter from './components/counter/index.js'
import Todo from './components/todo/index.js'

const App = () => {
  return (
    <div className='App'>
      <Counter multiplier={5} />
      <Todo />
    </div>
  )
}

export default App
