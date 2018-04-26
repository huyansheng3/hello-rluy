export default {
  state: {
    count: 0,
  },
  reducer: {
    mapCount(state, { payload }) {
      return { ...state, count: payload }
    },
  },
  effects: {
    *Increase(
      { fork, take, select, call, put, race, takeEvery, takeLatest },
      { payload }
    ) {
      yield put({ type: 'mapCount', payload })
    },
  },
}
