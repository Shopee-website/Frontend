import React, {useState, useEffect} from "react";
import './flashSale.scss'
import Banner from "components/banner";
import Product from "components/product";
import productApi from "api/productAPI";
import { Link } from "react-router-dom";
import FlashSaleProduct from "./flash-sale-card";
import { PropertySafetyFilled } from "@ant-design/icons";

function FlashSale(){
    
  const [products, setProducts] = useState([]);
 

    useEffect(()=> {
      const fetchProducts = async () => {
          const productList = await productApi.getAllProduct();
          setProducts(productList.data.rows);
      }
      fetchProducts();


    }, [])
    return (
        <div className="flash-sale-wrapper">
            <div className="flash-sale_banner">
                <div className="flash-sale_banner_image">
                <Banner
                        imageURL="https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lkjiqnqs3y7e7e"
                        width='1200px'
                        height='360px'
                    />
                </div>
            </div>
            <div className="flash-sale_products">
                <ul>
                    
                   
                    {products.map(post => {
                          return (
                          <Link key = {post.id} to={`/product-view/${post.id}`}>
                            <li>
                            <FlashSaleProduct
                                imageURL = { post.images && post.images.length > 0 && post.images[0].image || ''}
                                name = {post.product_name}
                                saleprice = { post.salePrice && '$' + post.salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") || '0đ'}
                                price = {post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            />
                            </li>
                              
                          </Link>
                          )
                      })}
                   
                </ul>
            </div>

        </div>
    )
}

export default FlashSale;