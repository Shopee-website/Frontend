
// import Footer from '../Footer/footer'
import logo from 'assets/images/logo-shopee.png'
import React from 'react'
import Footer from '../footer'
import './registerLayout.scss'
import { Link } from 'react-router-dom'


function registerLayout ({children}){
    return (
        <div>
            <div className='register-header'>
                <div className='register-header-logo'>
                    <Link   to={'/homepage'}>
                    <img src = {logo} alt = 'anh logo shopee' className='register-logo-img'/>
                    </Link>
                    <h2 className = 'register-logo-des'>
                        Đăng ký / Đăng nhập
                    </h2>
                </div>
                <div className='register-header-help'>
                    <a href=''>
                        Bạn cần giúp đỡ ?
                    </a>
                </div>
            </div>
            <div className='register-content'>
                {children}
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default registerLayout