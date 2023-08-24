import React from "react";
import './shopmall.scss'
import Banner from "components/banner";
import Item from "components/item";

function ShopMall () {

    const products = [1,1,1,1,1,1,1,1];
    return(
        <div className="shopmall-wrapper">
            <div className="shopmall-title">
                <div className="shopmall-title_logo">
                    <a href="/">shopee mall</a>
                </div>
                <div className="shopmall-title_options">
                    <ul>
                        <li><a href="/">7 Ngày Miễn Phí Trả Hàng</a></li>
                        <li><a href="/">Hàng Chính Hãng 100%</a></li>
                        <li><a href="/">Miễn Phí Vận Chuyển</a></li>
                    </ul>
                </div>
                <div className="shopmall-title_viewmore">
                    <a href="/">Xem tất cả</a>
                </div>
            </div>
            <div className="shopmall-content">
                <div className="shopmall-content_banner">
                    <Banner
                        imageURL = "https://cf.shopee.vn/file/vn-50009109-c1a0e6bae57a50d8a6c4923e5d11f300"
                        width = '390px'
                        height = "463px"
                        
                    />
                </div>
                <div className="shopmall-content_products">
                    <ul>

                        {
                            products.map(()=> (
                                <li><a href="/">
                                <Item
                                    imageURL="https://down-vn.img.susercontent.com/file/vn-50009109-1eb6a76463db64d0ff01a2fe12af2f2f_xhdpi"
                                    itemName='Voucher 500k'
                                    width='160px'
                                    height='160px'
                                    textSize = '16pt'
                                    textHeight = '40px'
                                    textWidth = '172px'
                                    textColor = 'red'
                                />
                                </a>
                            </li>
                            ))
                        }
                    </ul>
                
                </div>
            </div>

        </div>
        
    )
}

export default ShopMall;