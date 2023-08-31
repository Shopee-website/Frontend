import React from "react";
import './product.scss'

function Product(props){
    function formatNumber(number) {
        if (number >= 1000) {
            // Chia số cho 1000 và làm tròn đến 1 chữ số thập phân
            const formattedNumber = (number / 1000).toFixed(1);
            
            // Nếu số sau khi làm tròn là một số nguyên, loại bỏ chữ số thập phân
            return formattedNumber.endsWith('.0') ? formattedNumber.slice(0, -2) + 'k' : formattedNumber + 'k';
        }
        return number.toString(); // Không cần định dạng nếu số nhỏ hơn 1000
    }
    
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
                    <p>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                </div>
                <div className="product-sale_sold">
                    <p>Đã bán {formatNumber(props.sold)}</p>
                </div>
            </div>
        </div>
    )

}

export default Product;