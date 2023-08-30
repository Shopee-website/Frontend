import './admin.scss'
import shopee from '../../../assets/images/logo-shopee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyBill, faList, faDiamond, faHouse } from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'
import AdminProduct from './product'
import User from './user'
import { Link } from 'react-router-dom'

function Admin() {

    const [show, setShow] = useState(1);
   
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
                        <li className = 'admin-navbar-list'>
                            <button onClick={()=>setShow(1)}>
                            <FontAwesomeIcon icon = {faHouse} className= 'admin-navbar-icon'/>
                            Trang chủ Admin
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick= {()=>setShow(2)}>                               
                            <FontAwesomeIcon icon = {faDiamond} className= 'admin-navbar-icon'/>
                            Quản lý sản phẩm
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick={()=>setShow(3)}>
                            <FontAwesomeIcon icon = {faUser}  className= 'admin-navbar-icon'/>
                            Quản lý user
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick = {()=>setShow(4)}>
                            <FontAwesomeIcon icon = {faList} className= 'admin-navbar-icon'/>
                            Quản lý review sản phẩm
                            </button>
                            </li>
                        <li className = 'admin-navbar-list'>
                            <button onClick = {()=>setShow(5)}>
                            <FontAwesomeIcon icon = {faMoneyBill} className= 'admin-navbar-icon'/>
                            Thống kê thu nhập
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
                    <div className= {show === 2 ? 'admin-product active' : 'admin-product'}>
                        <AdminProduct/>
                    </div>
                    <div className= {show === 3 ? 'admin-user active' : 'admin-user'}>
                        <User/>
                    </div>
                    <div className= {show === 4 ? 'admin-review active' : 'admin-review'}>
                        
                    </div>
                    <div className= {show === 5 ? 'admin-money active' : 'admin-money'}>
                       
                    </div>
                </div>
            </div>
        </div>
     );

      

  
}

export default Admin;