import React, { useLayoutEffect, useState } from "react";
import './category-view.scss'

import { useParams, Link } from 'react-router-dom';
import productApi from "api/productAPI";
import Product from "components/product";
import Banner from "components/banner";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Select, Space, Radio } from 'antd';


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
        if (e.target.value === 'new'){
            sortByCreate();
        }
    };

    const onClick = (e) => {
        console.log('click ', e);
      };


    const  {categoryId}  = useParams();
    
    const [products, setProducts] = useState([])
 
    useLayoutEffect(() => {

        const fetchCategoryInfo = async () => {
            try {
                const productResult =  await productApi.getProductByCategoryId(categoryId);
                setProducts(productResult.data.rows);

            } catch (error) {
                console.log(error);
            }
        }
        fetchCategoryInfo();
        console.log(products);
    },[])

  

    const sortByPrice = () => {
        const sortedData = [...products]; 
        sortedData.sort((a, b) => a.price - b.price);
        setProducts(sortedData);
      };
    
      const sortByPrice2 = () => {
        const sortedData = [...products]; 
        sortedData.sort((a, b) => b.price - a.price);
        setProducts(sortedData);
      };

      const sortByCreate = () => {
        const sortedData = [...products]; 
        sortedData.sort((a, b) => b.createdAt - a.createdAt);
        setProducts(sortedData);
      };

    //   const sortByPromotion = () => {
    //     setProducts(()=> (
    //         products.filter(products.isPromotion === '1')
    //     ))
    //   };
    
    
    const handleChangeSelect = (value) => {
        if (value === 'min') {
            sortByPrice();
        }
        else if (value === 'max') {
            sortByPrice2();
        }
    
    };
  
    

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
                                imageURL="https://down-vn.img.susercontent.com/file/75d88079993e481881ae8a3390f2edaa"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/b8cdb3f55c26a37a899f90aa7df78045"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/5de88eb8d4bbefc253794bdd2d8946e6"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/f3f25e17f2b6839fdb3fae228ff9998b"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/cea0e96150243cc3d551980c8a741def"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/0c7732b82a4bd949ae3edfab7d1e315a"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e353d002868251a550c5f21261c5b36a"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/f08725b2245cc86d32eae65d314dd5ad"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/e08870897b8e588d1715da24a48d08a2"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/0f7270a6805f480c1cc110f64bc34880"
                                height='112px'
                                width= '198px'
                            />
                            </li>
                            <li>
                            <Banner
                                imageURL="https://down-vn.img.susercontent.com/file/c6ba07ecb5c3600ac36eb6ea933de944"
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
                        <div className="category-view_main_content_menu_option">Sắp xếp theo</div>
                    <Radio.Group value={placement} onChange={placementChange}>
                        <div style={{width: '50px' , display: 'inline-block'}}></div>
                        <Radio.Button value="Phổ biến">Phổ biến</Radio.Button>
                        <Radio.Button value="new">Mới nhất</Radio.Button>
                        <Radio.Button value="Bán chạy">Bán chạy</Radio.Button>
                    </Radio.Group>

                        <Space wrap>
                            <Select
                            defaultValue="Giá"
                            style={{
                                width: 200,
                            }}
                            onChange={handleChangeSelect}
                            options={[
                                {
                                value: 'min',
                                label: 'Giá : Thấp Đến Cao',
                                },
                                {
                                value: 'max',
                                label: 'Giá : Cao Đến Thấp',
                                },
                            ]}
                            />
                        </Space>
                    </div>
                    <div className="category-view_main_content_product" >
                        <ul>
                        {products.map(post => {
                            return (
                                <Link key = {post.id} to={`/product-view/${post.product_name.replace(/ /g, '-')}/${post.id}`}>
                                    <li>
                                        <Product 
                                            imageURL={post.images && post.images.length > 0 && post.images[0].image || 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj0uezovoi6k2b_tn'}
                                            name={post.product_name}
                                            discount ="giảm 25k"
                                            price={"$"+post.price}
                                            height = "188px"
                                            width = '187.5px'
                                            sold={post.quan_sold}  
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