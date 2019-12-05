export default {
  namespace: 'products',
  state: [],
  reducer: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    }
  }
}
