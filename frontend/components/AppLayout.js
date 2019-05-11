import React from 'react';
import Link from 'next/link';
import { Row, Col, Menu, Input, Card, Avatar } from 'antd';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

const dummy = {
  nickname: 'coolitea',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Cool SNS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8} style={{ padding: '10px' }}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? (
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
                avatar={<Avatar>{dummy.nickname[0]} </Avatar>}
                title={dummy.nickname}
              />
            </Card>
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://github.com/coolitea">
            <a target="_blank">coolitea GitHub</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
