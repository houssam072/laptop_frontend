import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';



export default function Headers() {
  return (
    <div className='header'>
      <div className="logo">
        <img src="" alt="" />
      </div>
      <ul className="justify-content-center d-flex" activeKey="/home">
        <li><Link to="/">Home</Link></li>
        <li><a href="/home">Category</a></li>
        <li><Link to="/all-product">Product</Link></li>
        <li><a href="/home">Article</a></li>
        <li><a href="/home">Contact Us</a></li>
      </ul>
      <div className="authUser">
      </div>
    </div>
  )
}
