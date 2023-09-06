import React, { useState, useEffect } from "react";
import "./MyProfile.scss";
import { Button, Form, Input, DatePicker } from "antd";
import { Radio } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import userInfoAPI from "api/userInfoAPI";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

export const MyProfile = () => {
  const [value, setValue] = useState("Male");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    userInfoAPI
      .getInfo()
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProfile(data.profile);
      });
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const defaultBirthday = "2000-01-01";
  return (
    <div className="my_profile__content">
      <div className="my_profile__content__header">
        <h1>Hồ sơ của tôi</h1>
        <div>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <div className="my_profile__content__body">
        <div className="my_profile__content__body__left">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            {/* <Form.Item label="Tên" name="name"> */}
            <div className="input__flex">
              <label>Tên</label>
              <Input
                value={profile.name}
                onChange={(e) => {
                  setProfile((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            {/* </Form.Item> */}
            <div className="input__flex">
              <label>Email</label>
              <Input
                value={profile.email}
                onChange={(e) => {
                  setProfile((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="input__flex">
              <label>Số điện thoại</label>
              <Input
                value={profile.telephone}
                onChange={(e) => {
                  setProfile((prev) => ({
                    ...prev,
                    telephone: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="input__flex">
              <label>Địa chỉ</label>
              <Input
                value={profile.address}
                onChange={(e) => {
                  setProfile((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="input__flex">
              <label>Gioi tinh</label>
              <Radio.Group
                value={profile.gender}
                onChange={(e) => {
                  setProfile((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }));
                }}
                style={{ display: "flex" }}
              >
                <Radio value={"Male"}>Male</Radio>
                <Radio value={"Female"}>Female</Radio>
                <Radio value={"Other"}>Other</Radio>
              </Radio.Group>
            </div>

            <div className="input__flex__date">
              <label>Ngay sinh</label>
              <DatePicker
                value={dayjs(
                  profile &&
                    (profile.birthday
                      ? profile.birthday.slice(0, 10)
                      : defaultBirthday),
                  dateFormat
                )}
                onChange={(_, date) => {
                  setProfile((prev) => ({
                    ...prev,
                    birthday: date,
                  }));
                }}
              />
            </div>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "red" }}
              >
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="my_profile__content__body__right">
          <div className="my_profile__content__body__right__wrapper">
            <div className="my_profile__content__body__right__img">
              <img src={profile && profile.avatar_url} alt="avatar" />
            </div>
            <button>Chọn ảnh</button>
          </div>
        </div>
      </div>
    </div>
  );
};
