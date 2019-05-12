// all, fork, takeLatest, takeEvery, call, put, take, delay, race, cancel, select, throttle, debounce
import {
  all,
  fork,
  takeLatest,
  call,
  put,
  take,
  delay
} from 'redux-saga/effects';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST
} from '../reducers/user';

function loginAPI() {
  // 서버에 요청을 보내는 부분
  // return axios.post('/login');
}

function* login() {
  try {
    // 백엔드 서버로 요청을 보낸다.
    // call : 동기 호출, fork : 비동기 호출
    yield call(loginAPI);

    // put : dispatch와 동일
    yield put({
      type: LOG_IN_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  // takeEvery 또는 takeLatest 호출
  // (1) takeEvery (모든 요청을 처리한다.)
  // 예: 사용자가 로그인 버튼을 빠르게 10번 누르는 경우
  // (2) takeLatest (이전 요청이 끝나지 않은 것이 있다면, 이전 요청을 취소한다.)
  // 예: 같은 금액 송금 10회
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchSignUp() {
  // 반복적으로 실행시키기 위해서 while(true) 사용. yield 가 중단점 역할을 하므로 한 번씩 실행된다.
  while (true) {
    // yield : 중단점 역할
    // take : 이벤트 리스너 역할 - HELLO_SAGA 액션이 들어왔을 때 재개된다.(generator.next())
    yield take(SIGN_UP_REQUEST);
    // 비동기 요청, 타이머 등
  }
}

export default function* userSaga() {
  // call : 동기 호출, fork : 비동기 호출
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
