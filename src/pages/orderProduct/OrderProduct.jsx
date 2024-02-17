import React, { useState } from 'react'
import './orderProduct.css'
import AxiosInstance from '../../auth/AxiosInstance';

export default function OrderProduct() {
    const token = localStorage.getItem('token');
    const [productCount, setProductCount] = useState(1);
    const [address, setAddress] = useState('');


    async function orderProduct (e) {
        const product_id = 1; // replace with your actual product_id
        const requestBody = {
          product_count: productCount,
          address: address,
          product: product_id
          // add other required fields here
        };
        e.preventDefault();

        
    try {
        const response = await  AxiosInstance.post(`http://localhost:8000/orders/buy-now/${product_id}/`,
        requestBody ,{
            headers: {       
                Accept: "application/json",
                Authorization: "Bearer" + token,  


            }
        })
    } catch (error) {
        console.error('Error:', error);
    }
    }



  return (
    <div>
        <form onSubmit={orderProduct}  action="" >
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio harum unde id, quis rerum aliquid eos eum repellat ex adipisci omnis voluptatem ad reprehenderit molestias a nobis porro nihil sit?
            </p>                
            <div className="form-group">
                <label htmlFor="">Address</label>
                <input className='info_input' 
                    placeholder='Enter Your Address please...' 
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                id="" />
                
                <label htmlFor="">Enter Number Of Device You Want To Buy</label>
                <input className='info_input' 
                    placeholder='0' 
                    type="number"
                    value={productCount}
                    onChange={(e) => setProductCount(e.target.value)}
                id="" />

            </div>
            <div className="form-group">
                <button className="mt-3 add-btn" type="submit">Submit</button>
            </div>


        </form>
        
    </div>
  )
}
