import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import {  Card, Space, Typography } from 'antd';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const AddProduct = () => {
  
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // disabled={true}
        style={{
          maxWidth: 600,
        }}
      >
        
        <Form.Item style={{marginTop: '30px'}} label="Tên sản phẩm">
          <Input />
        </Form.Item>
        <Form.Item label="Danh mục">
          <Select>
            <Select.Option value="demo">Thời Trang</Select.Option>
            <Select.Option value="demo">Công nghệ</Select.Option>
            <Select.Option value="demo">Đồ gia dụng</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Giá sản phẩm" >
          <InputNumber style={{width: '200px'}} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea rows={4} />
        </Form.Item>
       
        <Form.Item label="Phân loại">
                  <Form.List name={'list'} >
                    {(subFields, subOpt) => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: 16,
                        }}
                      >
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, 'size']}>
                              <Input placeholder="size" />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'color']}>
                              <Input placeholder="color" />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'quantity']}>
                              <Input placeholder="quantity" />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add()} block>
                              + Loại sản phẩm
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
        
        <Form.Item label="Hình ảnh" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item  >
          <Button  className='admin-product-add-button' >Thêm</Button>
        </Form.Item>
        
      </Form>
    </>
  );
};
export default () => <AddProduct />;