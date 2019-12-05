export default {
  namespace: 'lists',
  state: [],
  reducer: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id)
    }
  },
  effects: {
    *getList({ payload = {} }, { call, put }) {
      const result = 1;
      yield call({ type: 'delete', payload: result })
    }
  }
}
