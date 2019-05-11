import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
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
      content: 'Miniature Schnauzer',
      img:
        'https://i.pinimg.com/originals/53/c6/20/53c6209adbdc694f9fd5764b6cc73c70.jpg'
    }
  ]
};
const Home = () => {
  return (
    <div style={{ margin: '10px 0 20px 0' }}>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};
export default Home;
