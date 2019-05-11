import React from 'react';
import { Avatar, Card } from 'antd';

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
const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {dummy.Post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {dummy.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {dummy.Followers.length}
        </div>
      ]}>
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

export default UserProfile;
