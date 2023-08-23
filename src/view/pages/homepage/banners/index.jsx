import React  from "react";
import Item from "components/item";
import Banner from "components/banner";

function Banners () {
    return (
        <>
            <div className="home-page_banners_images">
                <div className="home-page_banners_images_main">
                  <Banner
                    imageURL = "https://cf.shopee.vn/file/vn-50009109-a4d6bd62a56c559201c98825afb6dc49_xxhdpi"
                    width = '796.66px'
                    height = '235.01px'
                  />
                </div>
                <div className="home-page_banners_images_sub">
                  <Banner
                      imageURL = "https://cf.shopee.vn/file/vn-50009109-b0fe74a6fa5669495956318c4f718e0e_xhdpi"
                      width = '398.34px'
                      height = '115px'
                    />
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
                      itemName='Miễn phí vận chuyển abc def'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                    <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
                      itemName='Miễn phí vận chuyển'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                    <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
                      itemName='Miễn phí vận chuyển'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                      <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
                      itemName='Miễn phí vận chuyển'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                      <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
                      itemName='Miễn phí vận chuyển'
                      width='45px'
                      height='45px'
                    />
                      </a></li>
                      <li><a href="/">
                      <Item
                      imageURL="https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi"
                      itemName='Miễn phí vận chuyển'
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