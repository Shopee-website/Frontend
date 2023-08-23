import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./Profile.scss";
import { MyProfile } from "./myProfile";

function Profile() {
  const location = useLocation();

  return (
    <div className="profile__main">
      <div className="profile__layout">
        <div className="profile__navbar">
          <div className="profile__navbar__header">
            <div className="profile__navbar__header__avatar">
              <img src="https://down-vn.img.susercontent.com/file/vn-11134226-7r98o-lkq0ckyjl3tc90_tn" />
            </div>
            <div className="profile__navbar__header__infor">
              <div className="profile__navbar__header__infor__name">ducphu</div>
              <div className="profile__navbar__header__infor__edit">
                <FontAwesomeIcon icon={faPen} />
                <span>Sửa hồ sơ</span>
              </div>
            </div>
          </div>

          <div className="profile__navbar__body">
            <ul className="profile__navbar__body__list">
              <li className="profile__navbar__body__item">
                <div className="profile__navbar__body__item__icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="profile__navbar__body__text">
                  <span>Tài khoản của tôi</span>
                </div>
              </li>
              <li className="profile__navbar__body__item">
                <div className="profile__navbar__body__item__icon"></div>
                <div className="profile__navbar__body__text">
                  <Link
                    to="/profile/my_profile"
                    style={{
                      color: location.pathname.includes(
                        "/profile" || "/profile/my_profile"
                      )
                        ? "red"
                        : "black",
                    }}
                  >
                    <span>Hồ sơ</span>
                  </Link>
                </div>
              </li>
              <li className="profile__navbar__body__item">
                <div className="profile__navbar__body__item__icon"></div>
                <div className="profile__navbar__body__text">
                  <span>Ngân hàng</span>
                </div>
              </li>
              <li className="profile__navbar__body__item">
                <div className="profile__navbar__body__item__icon"></div>
                <div className="profile__navbar__body__text">
                  <span>Địa chỉ</span>
                </div>
              </li>
              <li className="profile__navbar__body__item">
                <div className="profile__navbar__body__item__icon"></div>
                <div className="profile__navbar__body__text">
                  <span>Đổi mật khẩu</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
