export const initialState = {
  mainPosts: []
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
  type: ADD_POST
};

export const AddDummy = {
  type: AddDummy,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: 'Philip'
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      };
    case ADD_DUMMY:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      };
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
