export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: 'hjpark'
      },
      content: '첫 번째 게시글',
      img:
        'https://i.pinimg.com/originals/95/19/7c/95197c7913c228e33e9a99bbc19d736b.jpg'
    }
  ],
  imagePaths: []
};

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

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
