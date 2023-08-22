import './footer.scss'
import shopeepay from '../../assets/images/shopeepay.png'
import jcb from '../../assets/images/jcb.png'
import credit from '../../assets/images/credit.png'
import card from '../../assets/images/cod.png'
import grab from '../../assets/images/grab.png'
import ghtk from '../../assets/images/ghtk.png'
import ghn from '../../assets/images/ghn.jpg'
import vnpost from '../../assets/images/vnpost.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import qr from '../../assets/images/qr-shopee.png'
import appstore from '../../assets/images/appstore.png'
import ggplay from '../../assets/images/ggplay.png'
import gggalery from '../../assets/images/appgallery.png'
import bocongthuong from '../../assets/images/bocongthuong.png'
import {faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'



function Footer (){
    return (
        <div className='footer-container'>
            <div className='footer-list'>
                <div className='footer-service'>
                    <h3 className='footer-service-header'>
                    CHĂM SÓC KHÁCH HÀNG
                    </h3>
                    <ul className='footer-service-list'>
                        <li className='footer-service-item'>
                            <a href= "/">Shopee Blog</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Trung Tâm Trợ Giúp</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Shopee Mall</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Hướng Dẫn Mua Hàng</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Hướng Dẫn Bán Hàng</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Thanh Toán</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Shopee Xu</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Vận Chuyển</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Trả Hàng & Hoàn Tiền</a>
                        </li>
                        <li className='footer-service-item'>
                            <a href= "/">Chăm Sóc Khách Hàng</a>
                        </li>
                    </ul>
                </div>

                <div className='footer-shopee'>
                <h3 className='footer-shopee-header'>
                         VỀ SHOPEE
                    </h3>
                    <ul className='footer-shopee-list'>
                        <li className='footer-shopee-item'>
                            <a href= "/">Giới Thiệu Về Shopee Việt Nam</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Tuyển Dụng</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Điều Khoản Shopee</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Chính Sách Bảo Mật</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Chính Hãng</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Kênh Người Bán</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Flash Sales</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Chương Trình Tiếp Thị Liên Kết Shopee</a>
                        </li>
                        <li className='footer-shopee-item'>
                            <a href= "/">Liên Hệ Với Truyền Thông</a>
                        </li>
                    </ul>
                </div>

                <div className='footer-payment'>
                    <h3 className='footer-payment-card'>
                    THANH TOÁN
                    </h3>
                    <div className='footer-payment-img'>
                            <img  src= {credit}  alt = 'card' />
                            <img  src= {jcb}  alt = 'card' />
                            <img  src= {card}  alt = 'card' />
                            <img  src= {shopeepay}  alt = 'card' />
                    </div>
                    <h3 className='footer-delivery-card'>
                    ĐƠN VỊ VẬN CHUYỂN
                    </h3>
                    <div className='footer-delivery-img'>
                            <img  src= {grab}  alt = 'card' />
                            <img  src= {ghn}  alt = 'card' />
                            <img  src= {ghtk}  alt = 'card' />
                            <img  src= {vnpost}  alt = 'card' />
                    </div>
                </div>
                <div className='footer-follow'>
                    <h3 className='footer-follow-header'>
                    THEO DÕI CHÚNG TÔI TRÊN
                    </h3>
                    <div className='footer-follow-list'>
                        <div className='footer-follow-item'>
                            <FontAwesomeIcon icon = {faFacebook}/>
                            Facebook
                        </div>
                        <div className='footer-follow-item'>
                            <FontAwesomeIcon icon = {faLinkedin}/>
                            Instagram
                        </div>
                    </div>
                </div>
                <div className='footer-download'>
                <h3 className='footer-download-header'>
                    THANH TOÁN
                    </h3>
                    <div className='footer-download-img'>
                            <div className='footer-download-qr-pic'>
                            <img  src= {qr}  alt = 'anh' className='footer-download-qr' />
                            </div>
                            <div className='footer-download-side'>
                            <img  src= {appstore}  alt = 'anh'  className='footer-download-pic-up'/>
                            <img  src= {ggplay}  alt = 'anh' className='footer-download-pic'/>
                            <img  src= {gggalery}  alt = 'anh' className='footer-download-pic'/>
                            </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='footer-bottom-des'>
                © 2023 Shopee. Tất cả các quyền được bảo lưu.
                </p>
                <p className='footer-bottom-country'>
                    Quốc gia & Khu vực:
                    <a href='/'> Singapore</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Indonesia</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Đài Loan</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Thái Lan</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Malaysia</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Việt Nam</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Philippines</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Brazil</a> <span className='footer-bottom-line'></span>
                    <a href='/'> México</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Colombia</a> <span className='footer-bottom-line'></span>
                    <a href='/'> Chile</a> 
                </p>
            </div>
            <div className='footer-list_item'>
                <div className='footer-list-link'>
                    <a href='/'>CHÍNH SÁCH BẢO MẬT</a> <span className='footer-bottom-line footer-line'></span>
                </div>
                <div className='footer-list-link'>
                    <a href='/'>QUY CHẾ HOẠT ĐỘNG</a> <span className='footer-bottom-line footer-line'></span>
                </div>
                <div className='footer-list-link'>
                    <a href='/'>CHÍNH SÁCH VẬN CHUYỂN</a> <span className='footer-bottom-line footer-line'></span>
                </div>
                <div className='footer-list-link'>
                    <a href='/'>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
                </div>
            </div>
            <div className='footer-bottom-wrap'>
            <div className='footer-bottom-logo'>
                <div className='footer-bottom-logo-pic footer-bottom-logo-pic-left'>
                    <img alt = 'anh' src = {bocongthuong} />
                </div>
                <div className='footer-bottom-logo-pic footer-bottom-logo-pic-right'>
                    <img alt = 'anh' src = {bocongthuong} />
                </div>
            </div>
            </div>
            <div className='footer-bottom-para'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn <br/><br/>
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678) <br/><br/>
                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015 <br/><br/>
                © 2015 - Bản quyền thuộc về Công ty TNHH Shopee <br/><br/>
            </div>
        </div>
    ) 
}
export default Footer;