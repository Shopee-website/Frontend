import { Col, Row } from 'antd';
import Item from 'components/item';
import Banner from 'components/banner';
import {RightOutlined} from '@ant-design/icons';
import './flashsale.scss'
import { Link } from 'react-router-dom';

function FlashSaleList (props) {
  const products = props.products;
    return (
        <>
            <Row>
                  <Col span={21} className="home-page-main-content_flash-sale_title">
                    <Banner
                      imageURL = "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/fb1088de81e42c4e538967ec12cb5caa.png"
                      width = '130px'
                      height = '30px'
                    />
                  </Col>
                  <Col span={3} className="home-page-main-content_flash-sale_viewmore">
                    <p>Xem tất cả <RightOutlined /></p>
                  </Col>
                </Row>
                <Row>
                      {products.slice(5,11).map(post => {
                          return (
                            <Col  key = {post.id} span={4} className="home-page-main-content_flash-sale_product" >
                              <Link to={'/flash-sale'}>
                                <Item
                                  imageURL={post.images && post.images[0].image || ''}
                                  width='170px'
                                  height='170px'
                                />
                                <div className='flash-sale_product_info'>
                                  <div className='flash-sale_product_info_price'><p>{"$"+post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p></div>
                                  <div className='flash-sale_product_info_sold'>
                                    <div className='flash-sale_product_info_sold_status'>Đang bán chạy</div>
                                    <div className='flash-sale_product_info_sold_visual' style={{borderRadius:' 8px 0px 0px 8px'}}></div>
                                    <div className='flash-sale_product_info_sold_subvisual'></div>
                                  </div>
                                </div>
                              </Link> 
                          </Col> 
                          )
                      })}

                </Row>
        </>
    )
}

export default FlashSaleList;