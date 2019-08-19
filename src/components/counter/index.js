import React, { Fragment } from 'react'
import { increment } from './actions.js'
import { useSelector, useDispatch } from 'react-redux'

const Counter = (props) => {
  const state = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <Fragment>
      <h1>Counter {state.counter}</h1>
      <button onClick={() => dispatch(increment(props.multiplier))}>+</button>
    </Fragment>
  )
}

export default Counter
