const initialState = {
  'counter' : 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = state.counter + action.payload.increment
      return ({ ...state, 'counter': newState })
    default: 
      return state
  }
}
