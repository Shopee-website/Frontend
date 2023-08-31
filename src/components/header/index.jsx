import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {
    FacebookOutlined, 
    InstagramOutlined, 
    NotificationOutlined, 
    QuestionCircleOutlined,
    GlobalOutlined,
    ShoppingCartOutlined,
    AudioOutlined 
} from '@ant-design/icons';
import './index.scss';
import { Input, Space } from 'antd';
import SearchResult from "./search-result";
import { LogoShopeeIcon } from "components/icon";
import useAuth from 'hooks/useAuth'
import productApi from "api/productAPI";
const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#f53d2d',
      }}
    />
  );


function Header(props) {

    const [results, setResults] = useState([]);
    const [search, setSearch] = useState();


    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };


    useEffect(()=> {
        const fetchProducts = async () => {
        const params = {
            txt_search: search
        }
        const resultList = await productApi.getAllProduct(params);
        setResults(resultList.data.rows);
        console.log(resultList.data.rows);
    }
       fetchProducts();

    }, [search])


  

    const { user } = useAuth();
    

    const styleHeader = {
        position: `${props.position || 'fixed'}`,
    }
    

    const nagivate = useNavigate()

    function signout (){
        localStorage.setItem('token', null)
        localStorage.setItem('user', null)
        nagivate('/login')
    }
    return (
        <div className="header-shop-wrapper" style={styleHeader}>
            <div className="header-shop">
                <div className="header-shop_navbar">
                    <div className="header-shop_navbar_contact">
                        <ul className="header-shop_navbar_contact_list" >
                            <li><a href="/">Kênh người bán</a></li>
                            <li><a href="/">Trở thành người bán</a></li>
                            <li><a href="/">Tải ứng dụng</a></li>
                            <li>Liên hệ<a href="/"><FacebookOutlined /> <InstagramOutlined /></a></li>
                        </ul>
                    </div>
                    <div className="header-shop_navbar_support">
                        <ul className="header-shop_navbar_support_list">
                            <li><a href=""><NotificationOutlined /> Thông báo</a></li>
                            <li><a href=""><QuestionCircleOutlined /> Hỗ trợ</a></li>
                            <li><a href=""><GlobalOutlined /> Tiếng Việt</a></li>

                            {localStorage.getItem('token') !== 'null' ?
                                <>
                                <li>
                                   {user.name ? <div className="user-wrapper">
                                        <div className="user-avatar">
                                            <img src={user.avatar_url || 'http://localhost:8000/images/avatars/default-avatar.png'} />
                                        </div>
                                        <div className="user-name">{user.name}</div>
                                    </div>
                                    :
                                    'Xin chào'
                                    }
                                    
                                </li>
                                <li><a href = "" onClick={signout}>Đăng xuất</a></li>
                                </>
                                :
                                <>
                                    <li><Link to = "/register/">Đăng ký</Link></li>
                                    <li><Link to = "/login/">Đăng nhập</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="header-shop_main">
                    <div className="header-shop_main_logo">
                        <div className="header-shop_main_logo_image">
                            <a href="/">
                                <LogoShopeeIcon />
                            </a>
                        </div>

                    </div>
                    <div className="header-shop_main_search">
                        <div className="header-shop_main_search_button">
                            <Space>
                                <Search
                                placeholder="Shopee bao ship 0 Đồng - Đăng ký ngay"
                                enterButton="Search"
                                size="large"
                                className="header-shop_main_search_button_section"
                                style={{
                                        width: '52.5rem',
                                        height: '2.5rem',
                                    }}
                                suffix={suffix}
                                // onSearch={onSearch}
                                onChange={handleChangeSearch}
                                value={search}
                            />
                        </Space>
                            {search && results && results.length > 0 && <SearchResult result = {results}  />}
                        </div>
                        <div className="header-shop_main_search_recommend">
                            <ul>
                                <li><a href="/">Đồ 1k</a></li>
                                <li><a href="/">Iphone 1K</a></li>
                                <li><a href="/">Hoodie</a></li>
                                <li><a href="/">Áo thun</a></li>
                                <li><a href="/">Balo</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="header-shop_main_cart">
                        <div className="header-shop_main_cart_logo">
                            <Link to='/cart' >
                                <a href="/"><ShoppingCartOutlined className="header-shop_main_cart_logo_image" /></a>
                            </Link>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;