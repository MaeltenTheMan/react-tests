import counter from './components/counter/reducer.js'
import todos from './components/todo/reducer.js'

import { combineReducers } from 'redux'

const combinedReducers = combineReducers({
  counter,
  todos
})

export default combinedReducers
