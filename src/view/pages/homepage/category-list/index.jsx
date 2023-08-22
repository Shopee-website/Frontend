import React from 'react';
import { Col, Row } from 'antd';
import Item from 'components/item';
import { Link } from 'react-router-dom';
function CategoryList (props) {

  const category = props.category;
  // const category2 = props.category2;
  console.log(category);
    return (
        <>
            <Row>
                  <Col span={24} className="home-page-main-content_category_title">Danh mục</Col>
                </Row>
                <Row>                  
                    {/* {category2.slice(0,16).map((info)=> {
                      return (
                            <>
                              <Col key = {info.id} span={3} className="home-page-main-content_category_list">
                                <Link   to={`/category-view/${info.id}`}>
                                  <Item
                                    imageURL={info.image}
                                    itemName={info.name}
                                    width='88px'
                                    height='84px'
                                  />
                                </Link>
                              </Col>
                            </>
                            )
                            })
                      } */}
                      {category.map((info)=> {
                      return (
                              <Col key = {info.id}  span={3} className="home-page-main-content_category_list">
                                <Link  to={`/category-view/${info.id}`}>
                                  <Item
                                    imageURL={info.image}
                                    itemName={info.name} 
                                    width='88px'
                                    height='84px'
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