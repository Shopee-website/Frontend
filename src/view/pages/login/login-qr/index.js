import './login_qr.scss'
import qrcode from 'assets/images/qr-shopee.png'
import React, {useState, useEffect} from 'react'
import shopeehelp from 'assets/images/shopee-how.png'

function LoginQR() {

    const [show, setShow] = useState(false)
    function handleClick (e){
        e.preventDefault();
        setShow(show => !show)
    }

    return ( 
        <div>
            <form className='login-qr-form'>
                <h3 className='login-qr-header'>
                    Đăng nhập mới mã QR
                </h3>
                <div className='login-qr-image'>
                    <img src={qrcode}  alt = "anh" className='login-qr-pic'/>
                </div>
                <p className='login-qr-des'>
                    Quét mã QR bằng ứng dụng shopee
                </p>
                <div className='login-qr-link'>
                <button className='login-qr-how'
                onClick={(e)=>handleClick(e)}
                >
                    Làm thế nào để quét mã QR
                </button>
                </div>
            </form>
            {show && 
            <div className='login-qr-sidebar'>
                <h3 className='login-sidebar-header'>
                Làm thế nào để quét mã?
                </h3>
                <div className='login-sidebar-mark'>
                    {/* <span
                        onClick={handleClose}
                    >&times;</span> */}
                </div>
                <div className='login-sidebar-img'>
                    <img src= {shopeehelp} alt = "anh" className='login-sidebar-pic' />
                </div>
                <p className='login-sidebar-footer'>
                Nhấn vào biểu tượng quét mã trên ứng dụng Shopee để mở trình quét mã QR
                </p>
            </div>
            }
        </div>
    );
}

export default LoginQR;