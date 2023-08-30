import React, {useState, useEffect} from "react";
import './homepage.scss'
import CategoryList from "./category-list";
import Banners from "./banners";
import FlashSaleList from "./flash-sale";
import SubBanners from "./sub-banners";
import ShopMall from "./shop-mall";
import HotSearch from "./hotsearch";
import Recommend from "./recommend";
import productApi from "api/productAPI";
import categoryApi from "api/categoryAPI";
import { Pagination } from 'antd';




function HomePage(){
  
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const [pageProduct, setPageProduct] = useState(1)

  
  const onChangeSelect = (e) => {
    setPageProduct(e);
  }

  useEffect(()=> {
      const fetchProducts = async () => {
      const productList = await productApi.getAllProduct();
      setProducts(productList.data.rows);
  }
     fetchProducts();


  }, [ pageProduct])

  useEffect(()=> {
      const fetchCategory = async () => {
          const categoryList = await categoryApi.getAllCategory();
          setCategory(categoryList.data.rows);  

      }
      fetchCategory();

  }, [])


    return (
        <div className="home-page-wrapper">
            <div className="home-page_banners">
              <Banners />
            </div>
            <div className="home-page-main-content">
              <div className="home-page-main-content_category">
                <CategoryList 
                  category={category}
                />
              </div>
              <div className="home-page-main-content_flash-sale">
                <FlashSaleList products = {products} />
              </div>
              <div className="home-page-main-content_banners">
                <SubBanners />
              </div>
              <div className="home-page-main-content_shop-mall">
                <ShopMall />
              </div>
              <div className="home-page-main-content_hot-search">
                <HotSearch />
              </div>
              <div className="home-page-main-content_recommend">
                <Recommend products= {products} />
                <Pagination
                  // showSizeChanger
                  // onShowSizeChange={onShowSizeChange}
                  defaultCurrent={1}
                  onChange={onChangeSelect}
                  total={100}
                />
              </div>
            </div>
        </div>
    )
}

export default HomePage;