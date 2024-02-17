import React, { useEffect, useState } from 'react'
import Headers from '../../components/headers/Headers'
import './product_detailes.css'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import ReleatedProduct from '../releated_product/ReleatedProduct'
import Modal from 'react-modal'
import OrderProduct from '../orderProduct/OrderProduct'

export default function Product_detailes() {
    const { id } = useParams();
    const [productImage, setProductImage] = useState([]);
    const [product, setProduct] = useState('');
    const [productCat, setProductCat] = useState('');
    const [visible, setVisible] = useState(false)

    const fetchProduct = () => {
        axios.get(`http://127.0.0.1:8000/products/get_product/${id}`)
        .then((product) => {
        setProductCat(product.data.cat);
        setProduct(product.data)})
    }
    const fetchProductImage = () => {
        axios.get(`http://127.0.0.1:8000/products/get_product_image/${id}`)
        .then((img_res) => {
        setProductImage(img_res.data)})
    }
    


    useEffect(() => {
        fetchProduct();
        fetchProductImage();
        }
    , [id]);

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
        </div>

        <div className="detailes mt-5">
            <div className="container d-flex justify-content-between">
                <div className="image d-flex flex-column">
                    <div className="product_picture">
                    {<img src={`http://127.0.0.1:8000/${product.picture}`} alt="" />}

                    </div>
                    <div className="product_images mt-5 d-flex justify-content-between">
                    {<img src={`http://127.0.0.1:8000/${productImage.picture_one}`} alt="" />}
                    {<img src={`http://127.0.0.1:8000/${productImage.picture_tow}`} alt="" />}
                    {<img src={`http://127.0.0.1:8000/${productImage.picture_three}`} alt="" />}
                    {<img src={`http://127.0.0.1:8000/${productImage.picture_four}`} alt="" />}
                    </div>
                </div>
                <div className="info">
                    <h1>{product.name}</h1>
                    <h2>{product.brand}</h2>
                    <span>price :</span>  {product.price}$/ <span>quant :</span> {product.quant}
                    <p>type : {product.status}</p>
                    <p>desc:{product.desc}</p>
                    <div className="list d-flex justify-content-between">
                        <ul>
                            <li><span>name:</span> {product.name} </li>
                            <li><span>model:</span> {product.model} </li>
                            <li><span>color:</span>{product.color}  </li>
                            <li><span>processor:</span>{product.processor} </li>
                            <li><span>gpu:</span>{product.gpu}  </li>
                        </ul>
                        <ul>
                            <li><span>screen:</span> {product.screen} </li>
                            <li><span>ram:</span> {product.ram} </li>
                            <li><span>hard:</span> {product.hard} </li>
                            <li><span>os:</span>{product.os}  </li>
                        </ul>
                    </div>
                    <button onClick={() => setVisible(true)} className='buy-btn'>Buy Now</button>
                </div>
            </div>
            <ReleatedProduct productCat = {productCat}/>
        </div>
        {
            visible &&
            <Modal 
            isOpen={visible} onRequestClose={() => setVisible(false)}   portalClassName="popUpModal">
    
                <button onClick={() => setVisible(false)}>X</button>
                <OrderProduct />

            </Modal>
        }
        <Footer />

    </div>
  )
}
