
import './payment.scss'
import {useEffect, useState} from 'react'
import shopee_logo from 'assets/images/logo-shopee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faQuestion, faIdCard, faCoins} from '@fortawesome/free-solid-svg-icons'
// import productImage from 'assets/images/product_detail1.jpg'
import Footer from 'components/footer'
import axios from 'axios'
import formatPrice from 'components/format-price'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate , Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { newArrays, option } from '../cart/cart'
import billAPI from 'api/billApi'
import cartApi from 'api/cartAPI'
function Payment (){

    const [active, setActive] = useState('')
    // const [products, setProducts] = useState([])
    function handleClick (e){
        setActive(e.target.id)
    }
    const products = option === 1 ? newArrays : []
    // console.log(products)

    const arrProducts = products.map ((item , index)=> {
        return (
            <table className='payment-product-table'>
                 <tr>
                                <td className = 'payment-product-body'>
                                    <img src = {item.ProductDetail.Product.ProductImages[0].image} alt = 'anh ao' className='payment-product-img'/>
                                    <div>{item.ProductDetail.Product.product_name}</div>
                                </td>
                                <td className='payment-product-singlecol'>Loại: Purple,L</td>
                                <td className='payment-product-singlecol payment-number'>{formatPrice(item.total_price/item.quantity)}</td>
                                <td className='payment-product-singlecol payment-number'>{item.quantity}</td>
                                <td className='payment-product-singlecol payment-number'>{formatPrice(item.total_price)}</td>
                            </tr>
            </table>
        )
    })
    const navigate = useNavigate()

    function handleSubmit(e){
        // e.preventDefault();
        const bill = {
            product_money : totalCost,
            details : products.map((item)=> {
                return {
                    quantity : item.quantity,
                    product_detail_id : item.product_detail_id,
                    total_price : item.total_price
                }
            }) 
        }
        const postBill = async () => {
            try {
                const res = await billAPI.postBill(bill)
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        postBill();
        const deleteCart = async (id) =>{
            try {
                const res = await cartApi.deleteCart(id)
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        products.map((item) => {
            deleteCart(item.id)
        })
        toast.success('Mua hàng thành công', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        setTimeout(()=> {
            navigate('/homepage')
        },3000)
    }


    const totalCost = products.reduce((acc, item )=> {
        const total = acc + item.total_price
        return total
    }, 0)
    return (
        <div className='payment-wrap'>
            <div className='payment-header'>
                <Link to={'/homepage'} >
                <img className='payment-header-logo' src = {shopee_logo} alt = 'logo'/>
                </Link>
                <div className='payment-header-line'></div>
                <div className='payment-header-payment'>Thanh toán</div>
            </div>
            <div className='payment-content'>
                    <div className='payment-address'>
                        <div className='payment-address-line'></div>
                        <div className='payment-address-content'>
                            <div className='payment-address-header'>
                                <FontAwesomeIcon icon = {faLocation} className='payment-address-icon'/>
                                Địa chỉ nhận hàng
                            </div>
                            <div className='payment-address-body'>
                                <div className='payment-address-name'>
                                    Nguyễn Thị Thùy Dung (0382175198)
                                </div>
                                <div className='payment-address-add'>
                                7 Tạ Quang Bửu, Phường Bách Khoa, Quận Hai Bà Trưng, Hà Nội
                                </div>
                                <div className='payment-address-default'>
                                    Mặc định
                                </div>
                                <div className='payment-address-change'>
                                    <button>Thay đổi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payment-product'>
                        <table className='payment-product-table'>
                            <tr>
                                <th colSpan={2} className='payment-product-doublecol'>Sản phẩm</th>
                                <th className='payment-product-singlecol '>Đơn giá</th>
                                <th className='payment-product-singlecol'>Số lượng</th>
                                <th className='payment-product-singlecol'>Thành tiền</th>
                            </tr>
                        </table>
                        {arrProducts}
                    </div>
                        <table className='payment-product-note'>
                            <tr>
                                <td rowSpan={2} style = {{width : '40%'}}>
                                    <label  for = 'note'>
                                        Lời nhắn
                                    </label>
                                    <input type = 'text' placeholder='Lưu ý cho người bán' name = 'note' className='payment-product-inp'/>
                                </td>
                                <td className='payment-product-ship'>
                                    <div style = {{color: '#50bfa5'}}>Đơn vị vận chuyển :</div>
                                    <div>
                                        <h4>Vận chuyển nhanh</h4>
                                        <p style={{fontSize : '12px', marginTop : '6px'}}>Shopee Express</p>
                                    </div>
                                    <div className='payment-product-position'><button className='payment-product-ship-btn'>THAY ĐỔI</button></div>
                                    <div className='payment-product-position' style = {{fontSize : '14px'}}>đ15.000</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Được đồng kiểm <FontAwesomeIcon icon = {faQuestion} style={{fontSize : '14px'}}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='payment-product-total'>Tổng số tiền : 
                                    <span style = {{color : '#ee4d2d', fontSize : '20px',marginLeft : '16px'}}>{formatPrice(totalCost + 15000)}</span>
                                </td>
                            </tr>
                        </table>
                    <div className='payment-voucher'>
                        <div className='payment-voucher-shopee'>
                            <div>
                                <FontAwesomeIcon icon = {faIdCard} className='payment-voucher-icon'/> Shopee Voucher
                            </div>
                            <div>
                                <button>Chọn voucher</button>
                            </div>
                        </div>
                        <div className='payment-shopee-coin'>
                            <div>
                                <FontAwesomeIcon icon = {faCoins} className='payment-coin-icon'/> Shopee Xu
                            </div>
                        </div>
                    </div>
                    <div className='payment-cash'>
                        <div>Phương thức thanh toán</div>
                        <div><button className= {active === '1' ? 'payment-active' : undefined} 
                        key = {1}
                        id = {'1'}
                        onClick={handleClick}
                        >Tiền mặt</button></div>
                        <div><button className= {active === '2' ? 'payment-active' : undefined}
                        key = {2}
                        id = {'2'}
                        onClick={handleClick}
                        >Ví Shopee Pay</button></div>
                        <div><button className= {active === '3' ? 'payment-active' : undefined}
                        key = {3}
                        id = {'3'}
                        onClick={handleClick}
                        >Apple Pay</button></div>
                        <div><button className= {active === '4' ? 'payment-active' : undefined}
                        key = {4}
                        id = {'4'}
                        onClick={handleClick}
                        >Thẻ ngân hàng</button></div>
                    </div>
                    <div className='payment-total'>
                        <div className='payment-total-price'>
                            <table className='payment-total-table'>
                                <tr>
                                    <td>Tổng tiền hàng</td>
                                    <td style={{color : '#888888'}}>{formatPrice(totalCost)}</td>
                                </tr>
                                <tr>
                                    <td>Phí vận chuyển</td>
                                    <td style = {{color : '#888'}}>15.000đ</td>
                                </tr>
                                <tr>
                                    <td>Tổng thanh toán</td>
                                    <td style = {{fontSize: '20px', color : '#ee4d2d'}}>{formatPrice(totalCost + 15000)}</td>
                                </tr>
                            </table>
                        </div>
                        <div className='payment-pay'>
                            <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo 
                                <span style = {{color : 'blue'}}> Điều khoản của Shopee</span>
                            </p>     
                            <ToastContainer/>                    
                            <button
                                onClick = {handleSubmit}
                            >Mua hàng</button>
                        </div>
                    </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Payment