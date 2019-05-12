const dummyUser = {
  nickname: 'coolitea',
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {}
};

export const initialState = {
  isLoggedIn: false,
  user: null
};

// name of action
// 비동기 요청 3종 세트 (REQUEST / SUCCESS / FAILURE)
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // request Log in to backend server
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; // result from backend server. case 1) success
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // result from backend server. case 2) failure

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// 동기 요청
export const INCREMENT_NUMBER = 0;

export const signUpAction = data => {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
};

export const loginAction = {
  type: LOG_IN_REQUEST
};

export const logoutAction = {
  type: LOG_OUT_REQUEST
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        loginData: action.data,
        isLoading: true
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        isLoading: false
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        signUpData: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
