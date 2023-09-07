import React, { useState, useLayoutEffect, useEffect } from "react";
import Review from './review/review'
import Header from "components/header";
import { useParams, useNavigate } from 'react-router-dom';
import productApi from "api/productAPI";
import cartApi from "api/cartAPI"
import Footer from "components/footer";
import './product_view.scss'
import img1 from '../../../assets/images/product_detail1.jpg'
import img2 from '../../../assets/images/product_detail2.jpg'
import freeship from '../../../assets/images/freeship.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faCableCar, faCartShopping, faCommentsDollar} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faTelegram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import {Rating} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formatPrice from "components/format-price";

let productBuy ;
let select ;

function ProductInfo () {
    useEffect(()=> {
        window.scrollTo(0,0)
    }, [])

    const navigate = useNavigate()
    const  {productId}  = useParams();
    
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);
    const [quantity, setQuantity] = useState();
    const [addProduct, setAddProduct] = useState(true)
    const [product, setProduct] = useState()
    const [picture, setPicture] = useState()
    const [array, setArray] = useState([])
    const [like , setLike] = useState(false)
    const [active , setActive] = useState('')
    const [count, setCount] = useState(1)
    const [active1, setActive1] = useState('')
    


    useLayoutEffect(() => {
        const fetchProductInfo = async () => {
            try {
                const productResult =  await productApi.getProductById(productId);
                setProduct(productResult.data);
                const color = [...new Set(productResult.data.details.map(item => item.color))];
                setColors(color);
                const size = [...new Set(productResult.data.details.map(item => item.size))];
                setSizes(size);

                setPicture(productResult.data.images[0].image)

            } catch (error) {
                console.log(error);
            }
        }
        fetchProductInfo();
       
        productBuy = {};
        select = 0;
    }, [productId])


    const handleClick = (e)=> {
        setActive(e.target.value)
    }
    const handleClick1 = (e)=> {
        setActive1(e.target.value)
    }


    const checkquan = () => {
        if(active && active1){
            if(quantity) {
                return (
                    `còn ${quantity} sản phẩm`
                )
            } else return 'sản phẩm đã hết'
        } else {

            return 'vui lòng chọn thông tin sản phẩm'
        }
    }

    
    
    useEffect(() => {
        const buyProduct = () => {
            const selectedItem = product && product.details.find(item => item.color === active && item.size === active1);
            if(selectedItem && +selectedItem.quan_in_stock !== 0){
                setQuantity(selectedItem.quan_in_stock);
                setAddProduct(false)
            }else {
                setAddProduct(true)
            }
        }
        buyProduct();
    }, [active, active1])
   

    function handleSubmit(e) {
        e.preventDefault();

        
        const requestPost = async () => {
            try {
                const details = {
                    color: active,
                    size: active1
                }
                const product_detail = await productApi.getProductDetail(productId, details)
                const response = await cartApi.postCart({
                    product_detail_id : product_detail.data.productDetailId,
                    quantity : count
                })
                toast.success('Thêm vào giỏ hàng thành công', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                
                    });

                
            }
            catch (e){
                console.log(e)
                toast.error(e.response.data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }
        requestPost();
    }

    return (
        <div style={{margin: '0', padding: '0', boxSizing: 'border-box'}}>
            <Header position = "relative"/>
            {product&&
            
            <div>
                <div className='pro_detail-container'>
            <div className='pro_detail-content'>
                <div className='pro_detail-image'>
                    <img src = {picture}  className='pro_detail-main-img' />
                    <div className='pro_detail-img_list'>

                        {product.images && product.images.slice(0,5).map((img, index)=> {
                          return  <img src={img.image} alt='product' className='pro_detail-img-item' onMouseOver={()=>setPicture(img.image)} />
                        })
                        
                        }
                        
                    </div>
                    <div className='pro_detail-share'>
                        <div className='pro_detail-social'>
                            Chia sẻ tại 
                            <FontAwesomeIcon icon = {faInstagram} className='pro-detail-face'/>
                            <FontAwesomeIcon icon = {faTelegram} className='pro-detail-tele'/>
                            <FontAwesomeIcon icon = {faPinterest} className='pro-detail-pin'/>
                        </div>
                        <div className='pro_detail-line'>

                        </div>
                        <div className='pro_detail-like'>
                            <FontAwesomeIcon  icon = {faHeart} className= 'pro-detail-heart'
                                style = {{color : like  ? '#ff424f' : 'pink'}}
                                onClick={()=> setLike(!like)}
                            />
                          Đã thích ({product.likes})
                        </div>
                    </div>
                </div>
                <div className='pro_detail-body'>
                    <h3 className='pro_detail-header'>
                        <span className = 'pro_detail-des'>Yêu thích</span>
                            {product.product_name}
                    </h3>
                    <div className='pro_detail-rating'>
                        <div className='pro_detail-left'>

                            <div className='pro_detail-star'>
                            <span style = {{color : '#ee4d2d', textDecoration : 'underline', marginRight: '6px', fontSize : '18px'}}>{product.star}</span>
                            <Rating name="rating-read" defaultValue={5} precision={0.5} size = "small" readOnly />
                            </div>
                            <div className='pro_detail-lines'>

                            </div>
                            <div className='pro_detail-comments'>
                                    <span style= {{ textDecoration : 'underline', fontSize : '18px'}}>2k</span> 
                                    <span style = {{color : '#767676', fontSize : '14px', marginLeft : '4px'}}> Đánh giá</span>
                            </div>
                            <div className='pro_detail-lines'>

                            </div>
                            <div className='pro_detail-sold'>
                                    <span>{product.quan_sold}</span> 
                                    <span style = {{color :'#767676', fontSize : '14px', marginLeft : '4px'}}>Đã bán</span>
                            </div>
                        </div>
                        <div className='pro_detail-report'>
                            <button className='pro_detail-report-btn'>Tố cáo</button>
                        </div>
                    </div>
                    <div className='pro_detail-price'>
                        <div className='pro_detail-price_detail'>

                            <span className='pro_detail-realprice'>
                            {   
                                formatPrice(product.price)
                                }</span> 
                            <span className='pro_detail-sale'>40% giảm</span>
                        </div>
                        <div className='pro_detail-price-about'>
                            <div style={{display : 'flex', alignItems : 'center'}}>

                            <p style={{color : '#ef4d2d', fontSize: '14px', margin : '12px 0'}}>
                                Gì cũng rẻ</p> 
                                <div className='pro_detail-about-box'><span>&#63;</span>
                                    <div className='pro_detail-about-mini-box'>
                                        <p
                                            style={{color : 'blue', fontSize :'16px'}}
                                        >Giá tốt nhất so với các sản phẩm cùng loại trên Shopee</p>
                                        <p>
                                        Nhận được sự hỗ trợ rộng rãi từ Dịch vụ chăm sóc khách hàng Shopee và Dịch vụ hỗ trợ Người Bán của Shopee.
                                        Sử dụng các công cụ tiếp thị miễn phí để thu hút khách hàng và thúc đẩy doanh số bán hàng
                                        Tiếp cận hệ thống vận chuyển chuyên nghiệp một cách nhanh chóng
                                        Nhận được thông báo về bài viết/ video hướng dẫn, các khóa học miễn phí tại Học Viện Shopee - Shopee Uni sẽ giúp bạn bán hàng tại Shopee dễ dàng. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p style={{fontSize : '12px', color : '#767676' }}
                            >Giá tốt nhất với các sản phẩm cùng loại trên Shopee</p>
                        </div>
                    </div>
                    <table className='pro_detail-table'>
                        <tr className='pro_detail-column'>
                            <td className = 'pro_detail-td'>
                            Deal Sốc
                            </td>
                            <td>
                                <p className='pro_detail-deal'>Mua Kèm Deal Sốc</p>
                            </td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className = 'pro_detail-td'>
                            Bảo Hiểm
                            </td>
                            <td className='pro_detail-fashion'>
                                <p>Bảo hiểm Thời trang</p> <a href = '' className='pro_detail-fashion-link'>Tìm hiểu thêm</a>
                            </td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className = 'pro_detail-td'>
                            Vận Chuyển
                            </td>
                            <td>
                                <div className='pro_detail-delivery'>
                                    <div className='pro_detail-freeship'>
                                        <img src= {freeship} alt = 'anh' className='pro_detail-shipimg' />
                                        <div>
                                            <p className='pro_detail-deli-content'>Miễn phí vận chuyển<br/>
                                            <span style= {{color : '#767676', display: 'block', marginTop : '6px'}}>
                                                Miễn phí vận chuyển cho đơn hàng trên ₫99.000</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='pro_detail-priceship'>
                                        <table className='pro_detail-priceship-table'>
                                            <tr className='pro_detail-column'>
                                                <td className = 'pro_detail-td'>
                                                Vận Chuyển Tới
                                                </td>
                                                <td>Phường Bách Khoa, quận Hai Bà Trưng <span>&#8744;</span></td>
                                            </tr>
                                            <tr className='pro_detail-column'>
                                                <td className = 'pro_detail-td'>Phí Vận Chuyển</td>
                                                <td className = 'pro_detail-td'>
                                                <div className='pro_detail-td-price'>
                                                    <p className='pro_detail-td-prices'>16.500d </p>
                                                    <div className='pro_detail-big-box'>
                                                       <span>&#8744;</span> 
                                                       <div className='pro_detail-small-box'>
                                                            <p style={{color : 'black'}}>Nhanh</p>
                                                            <p> <span className='primary-color'>Giảm 15000đ</span> cho đơn từ 50000đ</p>
                                                            <p> <span className='primary-color'>Miễn phí vận chuyển </span> cho đơn từ 90000đ</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                </div>
                            </td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className = 'pro_detail-td'>Màu</td>
                            <td className='pro_detail-column-btn'>

                                {colors && colors.map((color, index) => {
                                    
                                    return (
                                        <button className={active === color ? 'pro_detail-active' : undefined}
                                        value = {color}
                                        key = {index}
                                        onClick = {handleClick}
                                        >{color}</button>
                                    )

                                })}
                                
                            </td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className = 'pro_detail-td'>Size</td>
                            <td className='pro_detail-column-btn'>
                            
                                  {sizes && sizes.map((size, index) => {
                                    
                                    return (
                                        <button className={active1 === size ? 'pro_detail-active' : undefined}
                                        value = {size}
                                        key = {index}
                                        onClick = {handleClick1}
                                        >{size}</button>
                                    )

                                })}
                              
                            </td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className='pro_detail-td'>Số lượng</td>
                            <td>
                                <button className='pro_detail-button'
                                onClick = {()=>setCount(count-1)}
                                >-</button>
                                <button className='pro_detail-button-number'>{count}</button>
                                <button className='pro_detail-button'
                                onClick = {()=>setCount(count+1)}
                                >+</button> 
                                <span style= {{color : '#767676',  marginLeft : '12px'}}>
                                 {checkquan()}
                                </span>
                            </td>
                        </tr>
                    </table>
                    <ToastContainer/>
                    <div className='pro_detail-btn'>
                        <button className={addProduct ? 'disable' : 'pro_detail-cart-btn'}
                        
                        onClick={handleSubmit}
                        disabled = {addProduct}
                        >
                            <FontAwesomeIcon icon = {faCartShopping}
                                style = {{marginRight : '12px'}}
                            />
                            Thêm vào giỏ hàng
                        </button>
                        <button className={addProduct ? 'disable' : 'pro_detail-buy'}
                            disabled = {addProduct}
                        >Mua ngay</button>
                    </div>
                </div>

            </div>
            <div className='pro_detail-description'>
                <div className='pro_detail-wrap-left'>
                    <div className='pro_detail-details'>
                    CHI TIẾT SẢN PHẨM
                    </div>
                    <table className='pro_detail-details-table'>
                        <tr className='pro_detail-column'>
                            <td className='pro_detail-td'>Danh Mục</td>
                            <td>Áo sơ mi</td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className='pro_detail-td'>Mẫu</td>
                            <td>Trơn</td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className='pro_detail-td'>Chiều dài tay áo</td>
                            <td>Dài tay</td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className='pro_detail-td'>Kho hàng</td>
                            <td>11654</td>
                        </tr>
                        <tr className='pro_detail-column'>
                            <td className='pro_detail-td'>Gửi từ</td>
                            <td>Hà Nội</td>
                        </tr>
                    </table>
                    <div className='pro_detail-details'>
                    MÔ TẢ SẢN PHẨM
                    </div>
                    <div className='pro_detail-para'>
                        <p>
                            {product.description}
                        </p>


                    </div>
                </div>
                <div className='pro_detail-same-products'>
                    <h4 className='pro_detail-same-header'>Top sản phẩm bán chạy</h4>
                    <div className='pro_detail-same-list'>
                        <div className='pro_detail-same-item'>
                            <img src = {img1} alt = 'anh the' className='pro_detail-same-img'/>
                            <div className='pro_detail-same-body'>

                            <h5>Áo sơ mi nữ cá tính</h5>
                            <p>100.000đ</p>
                            </div>
                        </div>
                        <div className='pro_detail-same-item'>
                            <img src = {img2} alt = 'anh the' className='pro_detail-same-img'/>
                            <div className='pro_detail-same-body'>

                            <h5>Áo sơ mi nữ cá tính</h5>
                            <p>120.000đ</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {<Review data = {productId}/>}
        </div>
                           
            </div>}
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export {productBuy, select}
export default ProductInfo;