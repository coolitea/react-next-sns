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
    },
    {
      User: {
        id: 2,
        nickname: 'hjpark'
      },
      content: '두 번째 게시글',
      img:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2017%2F04%2F15215815%2F102997423.jpg&w=400&c=sc&poi=face&q=85'
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
