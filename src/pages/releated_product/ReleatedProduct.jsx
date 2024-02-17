import React, { useEffect, useState } from 'react'

import axios from 'axios';


export default function ReleatedProduct({productCat}) {
    const [productRelated, setProductRelated] = useState([]);

    useEffect(() => {
        const fetchProductCat = async () => {
            console.log(productCat);
            try{
                const res = await axios.get(`http://127.0.0.1:8000/products/get_product_cat/${productCat}`)
                setProductRelated(res.data);
            }
            catch(error){
                console.log('Error fetching Product:', error)
            }
        }
        fetchProductCat();
    },[productCat]);
    const lastFourRealtedProduct = productRelated.slice(-4)
  return (
    <div className=" related_product mt-5">
        <h2 className='title'><span>Related</span> Product</h2>
        <div className="container d-flex">
            {
                lastFourRealtedProduct.map(
                    product => (
                        <div className="product">
                                <div className="product_image">
                                {<img src={`http://127.0.0.1:8000/${product.picture}`} alt="" />}
                                </div>
                                <div className="product_content">
                                    <div className="product_title">
                                        <a href={`/product-detailes/${product.id}`}>{product.name}</a>
                                    </div>
                                    <div className="product_price">
                                        {product.quant}
                                    </div>
                                </div>
                        </div>

                    )
                )
            }
        </div>
    </div>
  )
}
