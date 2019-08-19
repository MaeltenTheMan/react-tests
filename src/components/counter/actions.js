export const increment = (increment = 1) => {
  return {
    type: 'INCREMENT',
    payload: { increment }
  }
}
