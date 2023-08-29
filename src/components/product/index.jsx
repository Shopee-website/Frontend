import React from "react";
import './product.scss'

function Product(props){
   
    const productStyle = {
        backgroundImage: `URL(${props.imageURL})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: `${props.height || "1em"}`,
        width: `${props.width || "1em"}`,
    };

    return (
        <div className="product-wrapper">
            <div className="product-image">
                <div className="product-image_offer">{props.offer}</div>
                <div className="product-image_sticky">{props.sticky}</div>
                <div style={productStyle} ></div>
            </div>
            <div className="product-title">
                <div className="product-title_name"><p>{props.name}</p></div>
                <div className="product-title_discount"><p>{props.discount}</p></div>
            </div>
            <div className="product-sale">
                <div className="product-sale_price">
                    <p>{props.price}</p>
                </div>
                <div className="product-sale_sold">
                    <p>Đã bán {`${props.sold}`}</p>
                </div>
            </div>
        </div>
    )

}

export default Product;