import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';

// 목적 : 비동기 동작 처리
// (예: 백엔드 서버에 요청한 후 처리된 결과를 기다렸다가, 전달 받은 결과에 따라 다른 로직 처리)
export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
