import React, { useState, useEffect } from "react";
import Header from "components/header";
import { useParams } from 'react-router-dom';
import productApi from "api/productAPI";

function ProductInfo () {
    
    const  {productId}  = useParams();
    
    const [product, setProduct] = useState()
 
    useEffect(() => {
        const fetchProductInfo = async () => {
            try {
                const productResult =  await productApi.getProductById(productId);
                setProduct(productResult);

            } catch (error) {
                console.log(error);
            }
        }
        fetchProductInfo();
    }, [productId])

    return (
       
        <div style={{margin: '0', padding: '0', boxSizing: 'border-box'}}>
            <Header position = "relative"/>
            {product&&<div>
                
              <img style={{float: 'left'}} src={ product.images[0] ?? null} alt="hinh_anh" width='50%' />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
             
            </div>}
        </div>
    )
}

export default ProductInfo;