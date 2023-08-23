import React from "react";
import './recommend.scss'
import Product from "components/product";
import { Link } from "react-router-dom";
function Recommend (props){
  const products = props.products;
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
                  {products.map(post => {
                          return (
                          <Link key = {post.id} to={`/product-view/${post.name}/${post.id}`}>
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
                      })}
                    
                </ul>
            </div>

        </div>
    )
}

export default Recommend;