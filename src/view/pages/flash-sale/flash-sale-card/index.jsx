import './flashSaleItem.scss'
function FlashSaleProduct (props) {
    
    const productStyle = {
        backgroundImage: `URL(${props.imageURL})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: `${props.height || "280px"}`,
        width: `${props.width || "280px"}`,
    };
    return (
        <>
            <div className="product-sale-wrapper">
                <div className="product-sale-display">
                    <div style={productStyle} className="product-display_image"></div>
                    <div className="product-sale-content">
                        <div className="product-sale-content_name">{props.name}</div>
                        <div className="product-sale-content_rating">
                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" role="img" class="stardust-icon stardust-icon-rating-solid UxAacW"><path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" role="img" class="stardust-icon stardust-icon-rating-solid UxAacW"><path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" role="img" class="stardust-icon stardust-icon-rating-solid UxAacW"><path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" role="img" class="stardust-icon stardust-icon-rating-solid UxAacW"><path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" role="img" class="stardust-icon stardust-icon-rating-solid UxAacW"><path d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
                        </div>
                        <div className="product-sale-content_buy">
                            <div className='product-sale-content_buy_price'>
                                <p className='product-sale-content_buy_originPrice'>đ {props.price} </p>
                                <div className='product-sale-content_buy_line'></div>
                                <p>{props.saleprice}</p>
                            </div>
                            <div className='product-sale-content_buy_buybtn'>
                                Mua ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSaleProduct;