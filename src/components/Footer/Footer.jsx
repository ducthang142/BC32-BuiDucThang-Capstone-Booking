import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h6>Koinobori Việt Nam</h6>
            <ul className={styles.content__text}>
              <li>
                <a href="#">Giới Thiệu</a>
              </li>
              <li>
                <a href="#">Tiện Ích Online</a>
              </li>
              <li>
                <a href="#">Thẻ Quà Tặng</a>
              </li>
              <li>
                <a href="#">Tuyển Dụng</a>
              </li>
              <li>
                <a href="#">Liên Hệ Quảng Cáo</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6">
            <h6>Điều khoản sử dụng</h6>
            <ul className={styles.content__text}>
              <li>
                <a href="#">Điều Khoản Chung</a>
              </li>
              <li>
                <a href="#">Điều Khoản Giao Dịch</a>
              </li>
              <li>
                <a href="#">Chính Sách Thanh Toán</a>
              </li>
              <li>
                <a href="#">Chính Sách Bảo Mật</a>
              </li>
              <li>
                <a href="#">Câu Hỏi Thường Gặp</a>
              </li>
            </ul>
          </div>

          <div className={`${styles.content__icon} col-lg-3 col-sm-6`}>
            <h6>Kết nối với chúng tôi</h6>
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>

          <div className="col-lg-3 col-sm-6">
            <h6>Chăm sóc khách hàng</h6>
            <ul className={styles.content__text}>
              <li>
                <a href="#">Hotline: 1900 xxxx</a>
              </li>
              <li>
                Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
              </li>
              <li>
                <a href="#">Email hỗ trợ: hoidap@koinobori.vn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <p>COPYRIGHT 2022 KOINOBORI. All RIGHTS RESERVED .</p>
      </div>
    </div>
  );
};

export default Footer;
