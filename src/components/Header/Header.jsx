import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";
import { Menu, Avatar } from "@mantine/core";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={styles.header}>
      <Navbar collapseOnSelect expand="lg" className={styles.header__content}>
        <Navbar.Brand href="#">
          <img
            width={200}
            src="./image/Logo1.png"
            onClick={() => navigate("/")}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.content__text}>
            <a href="#showing" onClick={() => navigate("/")}>
              Lịch Chiếu
            </a>
            <a href="#cinemaList" onClick={() => navigate("/")}>
              Cụm Rạp
            </a>
            <a href="#">Tin Tức</a>
          </Nav>
          <Nav className={styles.content__button}>
            <button hidden={user} onClick={() => navigate("/signin")} className="me-2">
              Đăng Nhập
            </button>
            <button hidden={user} onClick={() => navigate("./signup")}>
              Đăng Ký
            </button>
            <Menu width={160} shadow="md" hidden={!user}>
              <Menu.Target>
                <Avatar radius="xl" />
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item component="a" onClick={() =>navigate("/account")}>Thông tin tài khoản</Menu.Item>

                <Menu.Item component="a" onClick={() => dispatch(logout())}>
                  Đăng Xuất
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
