import React, { useEffect, useState } from "react";
import './category-view.scss'

import { useParams, Link } from 'react-router-dom';
import productApi from "api/productAPI";
import Product from "components/product";
import Banner from "components/banner";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Select, Space, Radio } from 'antd';


const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  {
    type: 'divider',
  },
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];


function ProductCategory(){

    const [placement, SetPlacement] = useState('topLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };

    const onClick = (e) => {
        console.log('click ', e);
      };

    const  {categoryId}  = useParams();
    
    const [products, setProducts] = useState([])
 
    useEffect(() => {

        const fetchCategoryInfo = async () => {
            try {
                const params = {
                    categoryId: categoryId,
                }
                const productResult =  await productApi.getAllProduct(params);
                setProducts(productResult);

            } catch (error) {
                console.log(error);
            }
        }
        fetchCategoryInfo();
        
    }, [categoryId])


    

    return (
        <div className="category-view-wrapper">
            <div className="category-view_banner">
                <div className="category-view_banner_images" >
                    <Banner
                        imageURL="https://cf.shopee.vn/file/856d76a2fb06e2fbf00a82d2e37151d9"
                        width='1200px'
                        height='360px'
                    />
                </div>
            </div>
            
            <div className="category-view_header">
                <div className="category-view_header_title">
                    <div className="category-view_header_title_text">shopee mall</div>
                    <div className="category-view_header_title_viewmore">Xem tất cả</div>
                </div>
                <div className="category-view_header_brand">
                    <div className="category-view_header_brand_list">
                        <ul>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e929e6171253f09977fbdde17b4fa04c"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="category-view_main">
                <div className="category-view_main_sidebar" >
                <Menu
                    onClick={onClick}
                    style={{
                        width: 190,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
                </div>
                <div className="category-view_main_content">
                    <div className="category-view_main_content_menu" >
                    <Radio.Group value={placement} onChange={placementChange}>
                        <Radio.Button value="Sắp xếp theo">Sắp xếp theo</Radio.Button>
                        <div style={{width: '50px' , display: 'inline-block'}}></div>
                        <Radio.Button value="Phổ biến">Phổ biến</Radio.Button>
                        <Radio.Button value="Mới nhất">Mới nhất</Radio.Button>
                        <Radio.Button value="Bán chạy">Bán chạy</Radio.Button>
                    </Radio.Group>
                        <Space wrap>
                            <Select
                            defaultValue="lucy"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                value: 'jack',
                                label: 'Jack',
                                },
                                {
                                value: 'lucy',
                                label: 'Lucy',
                                },
                                {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                                },
                                {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                                },
                            ]}
                            />
                        </Space>
                    </div>
                    <div className="category-view_main_content_product" >
                        <ul>
                        {products.map(post => {
                            return (
                                <Link key = {post.id} to={`/product-view/${post.id}`}>
                                    <li>
                                        <Product 
                                            imageURL={post.images[0]}
                                            name={post.name}
                                            discount ="giảm 25k"
                                            price={"$"+post.originalPrice}
                                            height = "188px"
                                            width = '187.5px'
                                            sold="7,2k"  
                                        />
                                    </li>
                                 </Link>
                                 )
                            })
                        }
                        </ul>
                        
                    </div>
                </div>
            </div>





            

        </div>
    )
}

export default ProductCategory;