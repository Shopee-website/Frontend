
import Footer from '../../../components/footer'
import './cart.scss'
import { useNavigate } from 'react-router-dom'
import shopeeLogo from '../../../assets/images/logo-shopee.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMap, faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
import freeship from '../../../assets/images/freeship.png'
import axios from 'axios'
import {useState, useEffect} from 'react'
import img from '../../../assets/images/product_detail1.jpg'
import formatPrice from 'components/format-price'

let newArrays;

function Cart() {
    const [cart, setCart] = useState([])

    useEffect (()=> {
        const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
        axios.get('http://localhost:8000/api/cart/user-cart', {headers})
        .then (res => {
            console.log(res.data)
           setCart(res.data.products)
        })
        .catch(err => console.log(err));
    }, [])

    const handleDecrease = (id, quantity) => {

        setCart(cart => 
            cart.map((item)=>
                id === item.id ? {...item , quantity: item.quantity - (item.quantity > 1 ? 1 : 0), 
                    total : item.total - item.price
                } : item
        ))
    }
    const handleIncrease = (id, quantity) => {
        setCart(cart => 
            cart.map((item)=>
                id === item.id ? {...item , quantity: item.quantity + 1,
                    total : item.total + item.price} : item
        ))
    }


    function removeProduct(id) {
        console.log('xoas')
        const newCart = cart.filter((item) => item.id != id)
        setCart(newCart)
      }

      const [orderItems , setOrderedItems] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    const handleChange = (item, event) => {
        if (event.target.checked) {
        setOrderedItems((cart) => [...cart, item]);
        setTotalCost((total) => total + parseInt(item.total));
        // add item to orderedItems array
        } else {
        // remove item from orderedItems array
        setOrderedItems((cart) =>
            cart.filter((i) => i.id !== item.id)
        );
        setTotalCost((total) => total - parseInt(item.total));
        }
    }
    
    const navigate = useNavigate()
    function HandleClick(){
        setInterval(()=> {
            navigate('/payment')
        }, 3000)

    }

    newArrays = orderItems;
    return ( 
        <div className = 'cart-container'>
            <div className = 'cart-header'>
                <div className='cart-header-logo'>
                    <img src = {shopeeLogo} alt = 'anh logo shopee' className='cart-header-logo_img'/>
                    <div className='cart-header-line'></div>
                    <div className='cart-header-title'>GIỎ HÀNG</div>
                </div>  
                <div className='cart-header-search'>
                    <input type='text' placeholder = 'Siêu Vocher cùng săn ngay' className='cart-header-inp'/>
                    <button className='cart-header-search-btn'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
            <div className='cart-body'>
                <div className='cart-body-wrap'>
                    <div className='cart-voucher'>
                        <img src= {freeship} alt = 'anh ship' className='cart-voucher-img'/>
                        <p>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</p>
                    </div>
                    <div className='cart-product-general'>
                        <table>
                            <tr>
                                <td colSpan={2} className = 'cart-product-col-double'>
                                    <input type = 'checkbox' id = 'cart-total-product' name = 'cart-total-product'
                                    className = 'cart-product-checkbox'
                                    />
                                    Sản Phẩm</td>
                                <td className='cart-product-col-single'>Đơn Giá</td>
                                <td className='cart-product-col-single'>Số Lượng</td>
                                <td className='cart-product-col-single'>Số Tiền</td>
                                <td className='cart-product-col-single'>Thao Tác</td>
                            </tr>
                        </table>
                    </div>

                    <div className = 'cart-product-item'>
                        { cart && 
                            cart.map((cart)=> {
                                return <div className='cart-product-wrap'>
                                   <table>
                                                    <tr>
                                                        <td className='cart-product-col-special'>
                                                            <div className='cart-product-des'>
                                                                <input type='checkbox' id = {cart.id} name = {cart.id}  className = 'cart-product-checkbox' onChange={event => handleChange(cart, event)}  />
                                                                <img src = {img} alt= 'anh' className='cart-product-img'/>
                                                                <h4 className='cart-product-header'>{cart.title}</h4>
                                                            </div>
                                                        </td>
                                                        <td className='cart-product-category cart-product-col-single'>
                                                        Loại: Purple,L
                                                        </td>
                                                        <td className='cart-product-col-single'>{formatPrice(cart.price)}</td>
                                                        <td className='cart-product-col-single cart-product-btn'>
                                                            <button onClick = {()=>handleDecrease(cart.id, cart.quantity)}>-</button>
                                                            <button> {cart.quantity} </button>
                                                            <button onClick={()=> handleIncrease(cart.id, cart.quantity)} >+</button>
                                                        </td>
                                                        <td className='cart-product-col-single'
                                                            style = {{color : '#ee4d2d'}}
                                                        > {formatPrice(cart.total)}</td>
                                                        <td className='cart-product-col-single cart-product-method'>
                                                            <div>
                                                                <button type = 'button' onClick = {()=> removeProduct(cart.id)}>Xóa</button>
                                                                <p style={{color : '#ee4d2d'}}>Tìm sản phẩm tương tự</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table> 
                                                <div className='cart-product-shop'>
                                                    <FontAwesomeIcon icon = {faMap} className= 'cart-product-shop-voucher'/>
                                                    <p>Voucher của shop</p>
                                                </div>
                                                <div className='cart-product-ship'>
                                                    <img src= {freeship} alt= 'anh' className='cart-product-voucher'/>
                                                    <p>Giảm ₫15.000 phí vận chuyển đơn tối thiểu ₫50.000; Giảm ₫25.000 phí vận chuyển đơn tối thiểu ₫150.000
                                                        <span style={{color : '#007ac8', marginLeft : '12px'}}>Tìm hiểu thêm</span>
                                                    </p>
                                                </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='cart-pay'>
                        <button>
                            Chọn tất cả
                        </button>
                        <button>Xóa</button>
                        <p>Tổng thanh toán : <span style={{color : '#ee4d2d', fontSize : '20px'}}>{formatPrice(totalCost)}</span></p>
                        <button type = 'button' className='cart-pay-special' onClick = {HandleClick}>Mua hàng</button>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
     );
     
}

export {newArrays}

export default Cart;