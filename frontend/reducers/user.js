export const initialState = {
  isLoggredIn: false,
  user: {}
};

const LOG_IN = 'LOG_IN'; // name of action
const LOG_OUT = 'LOG_OUT';

const loginAction = {
  type: LOG_IN,
  data: {
    nickname: 'hjpark'
  }
};

const logoutAction = {
  type: LOG_OUT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggredIn: true,
        user: action.data
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggredIn: false,
        user: null
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
