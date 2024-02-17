import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Headers from '../../components/headers/Headers'
import './allProduct.css'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'


export default function AllProduct() {
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
                console.error('Error fetching categories:', error)
                
            }
        }
        fetchCat();
        fetchProduct();

    }, []);
  return (
    <div>
        <Headers />
        <div className="allproduct">
            <div className="head-card">
                <div className="avds_xl_content d-flex">
                    <div className="content">
                        <h1>Best Laptop and Computer Devices  </h1>
                        <div className='dot'></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex, illo voluptas corrupti numquam quibusdam.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container  mt-5">
                <p>showing 6 result</p>
                
                <div className="category">
                    <ul className="justify-content-center d-flex">
                        {
                            cat.map(item => (
                                <li><Link to = ''>{item.cat_name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="topProduct ">
                        {
                            product.map(product => (
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
            </div>
        </div>
        
        <Footer />
    </div>
  )
}
