import { useEffect, useState } from 'react';
import './transport.scss'
import billAPI from 'api/billApi';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table, Select } from 'antd';
import expandedRowRender from './product-trans';
import userApi from 'api/userApi';

const Transport = () => {
  const [bills, setBills] = useState([]);
    
    useEffect(()=> {
        const getAllBill = async () => {
            const response = await billAPI.getAllBill();
            setBills(response.data.rows)
            console.log(response.data.rows);
        }
        getAllBill();

    }, [])
    

    const handleChangeSelect = (value) => {
    
    };

      const columns = [
        {
          title: 'Tên người nhận',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'phone_number',
          key: 'platform',
        },
        {
          title: 'Ngày đặt hàng',
          dataIndex: 'createdAt',
          key: 'version',
        },
        {
          title: 'Trạng thái đơn hàng',
          key: 'operation',
          
          render: () => (
            <Space wrap>
            <Select
            defaultValue="Trạng thái vận chuyển"
            style={{
                width: 200,
            }}
            onChange={handleChangeSelect}
            options={[
                
                {
                    value: '1',
                    label: 'Đang chuẩn bị',
                },
                {
                    value: '2',
                    label: 'Đang vận chuyển',
                },
                {
                    value: '3',
                    label: 'Vận chuyển thất bại',
                },
                {
                    value: '4',
                    label: 'Giao hàng thành công',
                },
                {
                    value: '5',
                    label: 'Giao hàng thất bại',
                },
            ]}
            />
        </Space>
          ),
        },
      ];

      // const [data, setData] = useState([]);

      // const [user, setUser] = useState();

      

      // useEffect(()=> {
      //   bills && bills.map((bill)=> {

      //     const userInfo = async () => {
      //       const res = await userApi.getUserByID(bill.user_id);
      //       console.log(bill);

      //       data.push ({
      //         key: bill.id,
      //         name: res.data.profile.name,
      //         phone_number: res.data.profile.telephone,
      //         createdAt: bill.createdAt
      //       })
      //     }
      //     userInfo();

      //   })
      // }, [bills])


      const data = [];

      
      for (let i = 0; i < 15; ++i) {
        data.push({
          key: i.toString(),
          name: 'Tom ' + `${i}`,
          phone_number: '1234567890',
          createdAt: '2023-12-24 23:12:00',
        });
      }

    return (
        <div className='transport-wrapper'>
            <div className='transport-header'>
              
            </div>
            <div className='transport-content'>
            <Table
                columns={columns}
                expandable={{
                expandedRowRender,
                // defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
                pagination={false} 
                scroll={{
                    // x: 1500,
                    y: 500,
                  }}
            />
            </div>
        </div>
    )
}

export default Transport;