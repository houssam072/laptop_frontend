import React, { useEffect, useState } from 'react'
import './topProduct.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function TopProduct() {
    const [cat, setCat] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchCat = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/category/get_category');
                setCat(res.data);
            } catch (error) {
                console.error('Error fetching categories:', error)
            }
        };
        const fetchProduct = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/products/get_product');
                setProduct(res.data);
            } catch (error) {
                console.error('Error fetching Product:', error)
                
            }
        }
        fetchCat();
        fetchProduct();
    }, []);
    const lastThreeCat = cat.slice(-3)
    const lastThreeProduct = product.slice(-3)
  return (
    <div className='container'>
        <h1 className=' title'>Our <span>Products</span></h1>
        <div className="category">
            <ul className="justify-content-center d-flex">
                {
                    lastThreeCat.map(cat => (
                        <li key={cat.id}><Link to = ''>{cat.cat_name} </Link></li>
                    ))}
                <li><Link to="/all-product"> More...</Link></li>
            </ul>
        </div>
        <div className="topProduct">
            {
                lastThreeProduct.map(product => (
                    <div className="product">
                        <div className="product_image">
                            {<img src={`http://127.0.0.1:8000/${product.picture}`} alt="" />}
                        </div>
                        <div className="product_content">
                            <div className="product_title">
                                <Link to={`/product-detailes/${product.id}`}>{product.name}</Link>
                            </div>
                            <div className="product_price">
                                {product.quant}
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
        <div className="more-product">
            <div className="avds_xl_content">
                <div className="avds_title">
                   <h2>Amazing Device</h2>
                    <p>Lorem ipsum dolor sit amet <span>consectetur </span>adipisicing elit. Dicta eligendi sequi minima <span>blanditiis</span> temporibus commodi.</p>
                </div>
                <div className="more">
                    <h1><Link to={'/all-product'}>more</Link></h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}
