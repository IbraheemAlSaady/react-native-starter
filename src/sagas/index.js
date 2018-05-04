import splashSaga from './splash';

export default function* Sagas() {
  yield [
    splashSaga(),
  ];
}
