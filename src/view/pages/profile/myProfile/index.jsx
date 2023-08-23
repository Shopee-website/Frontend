import React, { useState } from "react";
import "./MyProfile.scss";
import { Button, Checkbox, Form, Input, DatePicker } from "antd";
import { Radio } from "antd";

export const MyProfile = () => {
  const [value, setValue] = useState("male");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
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
            <Form.Item label="Tên" name="name" defaultValue="phu2k3">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input
                type="password"
                placeholder="phu2k3@gmail.com"
                outline="none"
              />
            </Form.Item>

            <Form.Item label="Số điện thoại" name="telephone">
              <Input outline="none" value={"012345678"} />
            </Form.Item>

            <Form.Item label="Địa chỉ" name="address">
              <Input type="password" value={"Dong anh"} />
            </Form.Item>

            <Form.Item label="Giới tính" name="gender">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={"male"}>male</Radio>
                <Radio value={"female"}>female</Radio>
                <Radio value={"other"}>other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Ngày sinh" name="birthday">
              <DatePicker />
            </Form.Item>

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
              <img src="	https://down-vn.img.susercontent.com/file/vn-11134226-7r98o-lkq0ckyjl3tc90" />
            </div>
            <button>Chọn ảnh</button>
          </div>
        </div>
      </div>
    </div>
  );
};
