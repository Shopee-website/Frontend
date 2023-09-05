import './Adminstyle.scss'

import { DoubleLeftOutlined, 
    FundOutlined,
    ProfileOutlined,
    UserOutlined,
    CommentOutlined,
    StockOutlined
 } from '@ant-design/icons';

const Admin2 = () => {
    return (
        <div className='admin-wrapper'>
            <div className='admin-sidebar'>
                <div className='admin-sidebar_logo'>
                    <span className='admin-sidebar_logo_text'>Shop Admin</span>
                    <div className='admin-sidebar_logo_close'> <span><DoubleLeftOutlined /></span> </div>
                </div>
                <div className='admin-sidebar-btn'>
                    <ul>
                        <li><a ><FundOutlined />  Dashboard</a></li>
                        <li><a ><ProfileOutlined />  Product</a></li>
                        <li><a ><UserOutlined />  User</a></li>
                        <li><a ><CommentOutlined />  review</a></li>
                        <li><a ><StockOutlined />  Stats</a></li>
                    </ul>
                </div>
            </div>
            <div className='admin-content'></div>
            <div className='admin-header'></div>
        </div>
       
    )
}

export default Admin2;