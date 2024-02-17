import React from 'react'
import leftcardImage from '../../components/images/gaming-laptop-left-card.png'
import discount from '../../components/images/discount.png.webp'
import './topCard.css'

export default function TopCards() {
  return (
    <div className='topCard d-flex justify-content-between'>
        <div className="leftCard">
            <div className="small-inner">
                <div className="avds_small_content">
                    <div className="avds_title">
                        Gaming Laptop
                    </div>
                    <img width={200} src={leftcardImage} alt="" />
                </div>
                <div className="avds_discount_container">
                    <img src={discount} alt="" />
                    <div className="avds_discount">
                        <div>20
                        <span>%</span></div>
                        <div>Discount</div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="rightCard">
            <div className="avds_large_container">
                <div className="avds_large_content">
                    <div className="avds_title">Profissional Devices</div>
                    <p className="avds_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic beatae sed quasi, fuga eum incidunt. Adipisci molestias consequatur, est, blanditiis labore mollitia a, magnam aperiam cupiditate sed totam odit!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
