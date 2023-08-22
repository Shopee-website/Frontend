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

function HomePage(){
  
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  // const [category2, setCategory2] = useState([]);

  useEffect(()=> {
      const fetchProducts = async () => {
          const params = {_limit: 30}
          const productList = await productApi.getAllProduct(params);
          setProducts(productList.data);
      }
      fetchProducts();

      const fetchCategory = async () => {
          const params = {_limit: 30}
          const categoryList = await categoryApi.getAllCategory(params);
          setCategory(categoryList.data);  

      }
      fetchCategory();

    //   const fetchCategory2 = async () => {
    //     const categoryList2 = await categoryApi.getAllCategory2();
      
    //     setCategory2(categoryList2.rows);  
    // }
    //   fetchCategory2();

  }, [])
     
    // console.log(products);
    // console.log(category2);


    return (
        <div className="home-page-wrapper">
            <div className="home-page_banners">
              <Banners />
            </div>
            <div className="home-page-main-content">
              <div className="home-page-main-content_category">
                <CategoryList category={category}
                  // category2={category2}
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
              </div>
            </div>
        </div>
    )
}

export default HomePage;