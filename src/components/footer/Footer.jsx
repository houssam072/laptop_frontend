import React from 'react'
import './footer.css'
import logo from '../images/protected.png'

export default function Footer() {
  return (
    <div className='footer'>
            <div className="container">
                <div className="footer_content d-flex justify-content-between">
                    <div className="logo">
                        <img width={75} src={logo} alt="" />
                    </div>
                    <div className="copywright">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quam facere sit esse, reprehenderit consequatur.
                    </div>
                    <div className="socialmedia">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}
