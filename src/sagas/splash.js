import { takeLatest } from 'redux-saga/effects';

function* splash() {
  console.log('splash saga is here');
}

export default function* splashWatcher() {
  yield takeLatest('INIT_SPLASH', splash);
}
