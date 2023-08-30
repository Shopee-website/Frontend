import './login_email.scss'
import React , {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from 'api/auth'
import useAuth from 'hooks/useAuth'


function Login_email() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const [err1, setErr1] = useState(false)
    const navigate = useNavigate()

    const { setToken } = useAuth()

    function handleSubmit(e){
        e.preventDefault();
        const sendPostRequest = async () => {
            try {

                const values = {
                    email,
                    password
                }

                const response = await auth.login(values);
                // console.log(response);
                if(response.request.status === 200){
                    setToken(response.data.token)
                    // alert(response.data.message)
                    localStorage.setItem('token',response.data.token)
                } 
                
                
                toast.success('Đăng nhập thành công, bạn sẽ chuyển sang trang chính', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });

                setTimeout (() => (
                    navigate('/')
                ), 2000)
            }
            catch (e) {
                if (e.response.request.status === 404) {
                    setErr(true)
                    setTimeout(function (){
                        setErr(false)
                    },2000)
                }
                else if (e.response.request.status === 401){
                    setErr1(true)
                    setTimeout(function (){
                        setErr1(false)
                    },2000)
                }
                // alert(e.response.data.message)
            }
        }
        sendPostRequest()
    }


    return ( 
        <div>
             <form onSubmit={handleSubmit}>
                        <h3 className='login-form-header'>
                            Đăng nhập
                        </h3>
                        <input type="text" name='email' placeholder='Email/Số điện thoại/Tên đăng nhập' 
                        className='login-form-input' 
                        value = {email}
                        required
                        onChange = {(e)=>setEmail(e.target.value)}
                        autoComplete = "off"s
                        />

                        { err && <p style = {{color : 'red', fontSize: '14px'}}>Email không tồn tại</p>}

                        <input type="password" name='password' placeholder='Mật khẩu' 
                        className='login-form-input' 
                        value = {password}
                        required
                        onChange = {(e)=>setPassword(e.target.value)}
                        autoComplete = "off"

                        />

                        {err1 && <p style = {{color : 'red', fontSize: '14px'}}>Mật khẩu sai</p>}

                        <button className='login-form-btn'
                        >
                            ĐĂNG NHẬP
                        </button>
                        <ToastContainer/>
                        <div className='login-form-method'>
                            <div className='login-form-forget'>
                                Quên mật khẩu
                            </div>
                            <div className='login-form-sms'>
                                Đăng nhập bằng sms
                            </div>
                        </div>
                    </form>
        </div>
     );
}

export default Login_email;