import React from 'react';
import { Col, Row } from 'antd';
import Item from 'components/item';
import { Link } from 'react-router-dom';

function CategoryList (props) {

  const category = props.category;
  
    return (
        <>
            <Row>
                  <Col span={24} className="home-page-main-content_category_title">Danh mục</Col>
                </Row>
                <Row>                  
                    {category.slice(0,16).map((info)=> {
                      return (
                              <Col key = {info.id}  span={3} className="home-page-main-content_category_list" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Link  to={`/category-view/${info.name.replace(/ /g, '-')}/${info.id}`}>
                                  <Item
                                    imageURL={info.image}
                                    itemName={info.name} 
                                    width='88px'
                                    height='84px'
                                    textSize = '14px'
                                    textHeight = '40px'
                                    textWidth = '110px'
                                  />
                                </Link>
                              </Col>
                            )
                            })
                      }
                  
                </Row>
        </>
    )
}

export default CategoryList;