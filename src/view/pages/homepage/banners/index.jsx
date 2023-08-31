import React  from "react";
import Item from "components/item";
import Banner from "components/banner";
import { Carousel } from 'antd';

import './bannerList.scss'

function Banners () {
    return (
        <>
            <div className="home-page_banners_images">
                <div className="home-page_banners_images_main" style={{margin: '0'}}>
                  <Carousel autoplay >
                  <Banner
                    imageURL = "https://cf.shopee.vn/file/vn-50009109-a4d6bd62a56c559201c98825afb6dc49_xxhdpi"
                    width = '16/9 * 235 + 1'
                    height = '235px'
                  />
                  <Banner
                    imageURL = "https://cf.shopee.vn/file/vn-50009109-a4ace3dc6da2d9973c30439f6d606425_xxhdpi"
                    width = '796.66px'
                    height = '235.01px'
                  />
                  <Banner
                    imageURL = "https://cf.shopee.vn/file/vn-50009109-c4c5a23170373352866ac8cdaf8e69e3_xxhdpi"
                    width = '799.8px'
                    height = '235.01px'
                  />
                  </Carousel>
                </div>
                <div className="home-page_banners_images_sub">
                  <Banner
                      imageURL = "https://cf.shopee.vn/file/vn-50009109-b0fe74a6fa5669495956318c4f718e0e_xhdpi"
                      width = '398.34px'
                      height = '115px'
                    />
                    <div style={{height: '5px'}}></div>
                  <Banner
                    imageURL = "https://cf.shopee.vn/file/vn-50009109-878e47f8bdcd4385bf71c1363a68a43d_xhdpi"
                    width = '398.34px'
                    height = '115px'
                  />
                </div>
              </div>
              <div className="home-page_banners_offers">
                <div className="home-page_banners_offers_list">
                  <ul>
                    <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi"
                      itemName='Khung giờ săn sale'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                    <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/a8d76bca057ba0b117dcf8e1ef068d16_xhdpi"
                      itemName='Miễn phí vận chuyển cho mọi đơn'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                    <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
                      itemName='Voucher Giảm Đến 500.000Đ'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                    <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
                      itemName='Voucher Giảm Đến 500.000Đ'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                    <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi"
                      itemName='mã giảm giá'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                      <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi"
                      itemName='Gì Cũng Rẻ - Deal Sốc 9.000Đ'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                      <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi"
                      itemName='Nạp Thẻ, Dịch Vụ & Khách Sạn'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                      <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi"
                      itemName='hàng quốc tế'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                  </ul>
                </div>
              </div>
        </>
    )
}

export default Banners;