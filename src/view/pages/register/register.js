import './register.scss'
import { useState , useEffect} from 'react';
import facebook from '../../../assets/images/Facebook_Logo.png'
import google from '../../../assets/images/google_logo.png'
import Background from '../../../assets/images/register-background.jpg'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import auth from 'api/auth';
import useAuth from 'hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';
// import "~antd/dist/antd.css";
import { Alert, Space } from 'antd';





function Register (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const navigate = useNavigate();
    const [err, setErr] = useState([false, false, false])

    // useEffect(()=> {
    //     if (localStorage.getItem('token')){
    //         navigate('/homepage')
    //     }
    // }, [])
    const {setToken } = useAuth();

    function handleValidation(e){

    
        e.preventDefault();

        const sendPostRequest = async () => {
            try {
                
                const values = {
                    email,
                    password,
                    password2
                }

                const response = await auth.register(values);

                // console.log(response);

                if(response.request.status === 200){
                   
                 // alert(response.data.message)
                setToken(response.data.token);   
                localStorage.setItem('token',response.data.token)

                
                } 
                toast.success('Đăng ký thành công, bạn sẽ chuyển sang trang chính', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                
                setTimeout(function() {
                    navigate('/homepage')
                },2000)

                // setEmail('')
                // setPassword('')
                // setPassword2('')
            }
            catch (e){
                if (e.response.request.status === 400)
                {
                    setErr([true, false, false])
                    setTimeout(()=>{
                        setErr([false, false, false])
                    },2000)
                   
                }
                else if (e.response.request.status === 409)
                {
                    setErr([false,false, true])
                    setTimeout(()=>{
                        setErr([false, false, false])
                    },2000)
                }
            }
        }
        sendPostRequest();
    }


    return (
            <div className='register-content' style ={{backgroundImage: `url(${Background})`}}>
                <div className='register-content-left'>
                </div>
                <div className='register-form'>
                    <form onSubmit={handleValidation}>
                        <div className='register-form-header'>
                            Đăng ký
                        </div>
                        <label for= 'email' className='register-label'>Email</label> <br/>
                        <input 
                            type = 'text'
                            id = 'email'
                            name = 'email'
                            placeholder='Nhập email'
                            required
                            value = {email}
                            className='register-input'
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete= "off"
                        />
                       
                       {err[0] && <p style = {{fontSize: '14px', color : 'red'}} >Email không đúng định dạng</p>}

                        <br/>
                        <label for= 'password' className='register-label'>Mật khẩu</label> <br/>
                        <input 
                            type = 'password'
                            id = 'password'
                            name = 'password'
                            placeholder='Nhập mật khẩu'
                            required
                            value = {password}
                            className='register-input'
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete= "off"

                        />


                        <br/>
                        <label for= 'confirm_password' className='register-label'>Nhập lại mật khẩu</label><br/>
                        <input 
                            type = 'password'
                            id = 'confirm_password'
                            name = 'confirm_password'
                            placeholder='Nhập lại mật khẩu'
                            required
                            value = {password2}
                             className='register-input'
                            onChange={(e) => setPassword2(e.target.value)}
                            autoComplete= "off"

                        />

                        {err[2] && <p style = {{fontSize: '14px', color : 'red'}}>Mật khẩu nhập lại không đúng</p>}

                        <br/>
                        <button className='register-btn'>
                            TIẾP THEO
                        </button>
                        <ToastContainer/>
                        <div className='register-form-footer'>
                            <div className='register-footer-top'>
                                    <div className='register-line'></div>
                                    <div className='register-line-des'>HOẶC</div>
                                     <div className='register-line'></div>
                            </div>
                            <div className='register-footer-icon'>
                               <button className='register-footer-btn'>
                               <img src={facebook}  alt='anh'  className='register-footer-img'/>
                                    Facebook
                               </button>
                               <button className='register-footer-btn'>
                               <img src={google}  alt='anh'  className='register-footer-img'/>
                                    Google
                               </button>
                                
                            </div>
                            <p className='register-footer-des'>
                            Bằng việc đăng kí, bạn đã đồng ý với Shopee về <br/>
                                <a href='' className='register-link'>Điều khoản và dịch vụ</a>
                                           <span> & </span> 
                                <a href='' className='register-link'>Chính sách bảo mật</a>
                            </p>
                            <p className='register-login'>
                                <span style = {{color : '#ccc'}}>Bạn đã có tài khoản? </span> 
                                <Link to = '/login' className='register-link'>Đăng nhập</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Register