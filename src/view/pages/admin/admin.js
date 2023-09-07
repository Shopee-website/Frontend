import './admin.scss'
import shopee from '../../../assets/images/logo-shopee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyBill, faList, faDiamond, faHouse, faCartFlatbed} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'
import AdminProduct from './product'
import User from './user'
import { Link } from 'react-router-dom'
import AdminReview from './review'
import Transport from './transport'

function Admin() {

    const [show, setShow] = useState(1);
    const [active, setActive] = useState(1);

    const handleBtnClick = (e) => {
        setShow(+e.target.value);
        setActive(+e.target.value)
    }
   
    return ( 
        <div className='admin-container'>
            <div className='admin-header'>
                <div>
                    <Link to={'/homepage'}>
                        <img src = {shopee} alt = 'anh shopee' className='admin-logo-img'/>
                    </Link>
                    
                </div>
                <div style={{fontSize : '20px'}}>
                    Admin 
                </div>
            </div>
            <div className='admin-body'>
                <div className='admin-navbar'>
                    <ul className = 'admin-navbar-item'>
                        <li className = {active === 1 ?'admin-navbar-item-list btn-active' : 'admin-navbar-item-list' } >
                            <button value={1} onClick={handleBtnClick}>
                            <FontAwesomeIcon icon = {faHouse} className= 'admin-navbar-icon'/>
                            Trang chủ Admin
                            </button>
                            </li>
                        <li className = {active === 2 ?'admin-navbar-item-list btn-active' : 'admin-navbar-item-list' }>
                            <button value={2} onClick= {handleBtnClick}>                               
                            <FontAwesomeIcon icon = {faDiamond} className= 'admin-navbar-icon'/>
                            Quản lý sản phẩm
                            </button>
                            </li>
                        <li className = {active === 3 ?'admin-navbar-item-list btn-active' : 'admin-navbar-item-list' } >
                            <button  value={3} onClick={handleBtnClick}>
                            <FontAwesomeIcon icon = {faUser}  className= 'admin-navbar-icon'/>
                            Quản lý user
                            </button>
                            </li>
                        <li className = {active === 4 ?'admin-navbar-item-list btn-active' : 'admin-navbar-item-list' }>
                            <button value={4} onClick = {handleBtnClick}>
                            <FontAwesomeIcon icon = {faList} className= 'admin-navbar-icon'/>
                            Phản hồi
                            </button>
                        </li>
                        <li className = {active === 5 ?'admin-navbar-item-list btn-active' : 'admin-navbar-item-list' }>
                            <button value={5} onClick = {handleBtnClick}>
                            <FontAwesomeIcon icon = {faMoneyBill} className= 'admin-navbar-icon'/>
                            Thống kê thu nhập
                            </button>
                        </li>
                        <li className = {active === 6 ?'admin-navbar-item-list btn-active' : 'admin-navbar-item-list' }>
                            <button value={6} onClick = {handleBtnClick}>
                            <FontAwesomeIcon icon={faCartFlatbed} className= 'admin-navbar-icon' />
                            Quản lý đơn hàng
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='admin-content'>
                    
                    <div className= {show === 1 ? 'admin-main-web active' : 'admin-main-web'}>
                        <div className='admin-main-header'>Trang chủ web admin</div>
                        <div>
                            
                        </div>
                    </div>
                    <div className= {show === 2 ? 'admin-product active' : 'hide-page'}>
                        <AdminProduct/>
                    </div>
                    <div className= {show === 3 ? 'admin-user active' : 'hide-page'}>
                        <User/>
                    </div>
                    <div className= {show === 4 ? 'admin-review active' : 'hide-page'}>
                        <AdminReview/>
                    </div>
                    <div className= {show === 5 ? 'admin-money active' : 'hide-page'}>
                       
                    </div>
                    <div className= {show === 6 ? 'admin-transfer active' : 'hide-page'}>
                       <Transport />
                    </div>
                    <div className= {show === 7 ? 'admin-money active' : 'hide-page'}>
                       
                    </div>
                </div>
            </div>
        </div>
     );

      

  
}

export default Admin;