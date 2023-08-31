import React from "react";
import './recommend.scss'
import Product from "components/product";
import { Link } from "react-router-dom";
function Recommend (props){
  const products = props.products;
//   console.log(products);

    return (
        <div className="recommend-wrapper">
            <div className="recommend-title">
                <div className="recommend-title_text">
                    <p>Gợi ý hôm nay</p>
                </div>
                <div className="recommend-title_line"></div>
            </div>
            <div className="recommend-products">
                <ul>
                  { products.map(post => {
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
                      })}
                    
                </ul>
            </div>

        </div>
    )
}

export default Recommend;