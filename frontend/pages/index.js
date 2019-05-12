import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';

const Home = () => {
  const { isLoggedIn, user } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  //------ Redux DevTools start ------
  // Redux DevTools 사용 시 활성화
  // Sample case : Login -> Logout -> Login
  // Production 배포 시 비활성화 해야 함
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loginAction);
    // dispatch(logoutAction);
    // dispatch(loginAction);
  }, []);
  //------ Redux DevTools end ------

  return (
    <div style={{ margin: '10px 0 20px 0' }}>
      {user ? (
        <div>{user.nickname}님, 반갑습니다.</div>
      ) : (
        <div>로그인 상태가 아닙니다.</div>
      )}
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};
export default Home;
