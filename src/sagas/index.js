import babelPolyfill from 'babel-polyfill'
import { select, takeEvery, fork, take, takeLatest } from 'redux-saga/effects'
// babelPolyfill()
function* todo(action) {
  console.log(action)
  console.info('sagas已连接')
}

export default function* sagas() {
  yield takeLatest('*', todo)
}
