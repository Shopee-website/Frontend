import Banner from "components/banner";
import { Col, Row } from 'antd';

function SubBanners (){
    return (
        <>
            <Row>
                  <Col span={24}>
                    <Banner
                      imageURL = "https://cf.shopee.vn/file/sg-50009109-dd9f4835e2815b2a2d33ec3270433e91"
                      width = '1200px'
                      height = '110px'
                    />
                  </Col>
                  
                </Row>
        </>
    )
}

export default SubBanners;