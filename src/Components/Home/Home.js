import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

const Home = () => {
  const onLogOut = () => {
    console.log("Log Out");
  };
  const isLoggedIn = true;

  return isLoggedIn ? (
    <Row className="home-page">
      <Col style={{ padding: "1em" }} span={24}>
        <Logo hasText />
      </Col>
      <Col span={18} offset={3}>
        <Menu className="is-menu-container" style={{ borderRadius: "10px" }}>
          <Menu.Item key={"post"} className="is-menu-item menu-first">
            <Link to="/new-post">New Post</Link>
          </Menu.Item>
          <Menu.Item key={"profile"} className="is-menu-item">
            <Link to="/profile/">Profile</Link>
          </Menu.Item>
          <Menu.Item key={"feed"} className="is-menu-item">
            <Link to="/feed">Feed</Link>
          </Menu.Item>
          <Menu.Item
            key={"logout"}
            onClick={() => onLogOut()}
            className="is-menu-item menu-last"
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  ) : (
    <Row className="home-page">
      <Col style={{ padding: "1em" }} span={24}>
        <Logo hasText />
      </Col>
      <Col span={18} offset={3}>
        <Menu className="is-menu-container" style={{ borderRadius: "10px" }}>
          <Menu.Item key={"profile"} className="is-menu-item">
            <Link to="/profile/">Yip-Yap Team Profile</Link>
          </Menu.Item>
          <Menu.Item key={"feed"} className="is-menu-item">
            <Link to="/feed">Community Feed</Link>
          </Menu.Item>
          <Menu.Item key={"post"} className="is-menu-item menu-first">
            <Link to="/auth">Sign In / Sign Up</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Home;
