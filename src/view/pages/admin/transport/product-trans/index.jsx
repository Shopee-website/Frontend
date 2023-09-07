import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table, Select } from 'antd';


 const expandedRowRender = () => {
    const columns = [
      {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Phân loại',
        dataIndex: 'details',
        key: 'upgradeNum',
      },
      {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'upgradeNum',
      },
      {
        title: 'Xác nhận',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      
    ];
    const data = [];
    for (let i = 0; i < 4; ++i) {
      data.push({
        key: i.toString(),
        name: 'Sản phẩm ' + `${i}`,
        details: 'Phân loại '+'size: M , color : Màu Đen',
        quantity: `${i + 1}`
      });
    }
    return (<Table 
                columns={columns} 
                dataSource={data} 
                pagination={false} 
            />)
  };

  export default expandedRowRender;