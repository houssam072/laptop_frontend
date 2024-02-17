import React from 'react'
import delivery_image from '../../components/images/icon_1.svg'
import Guarantee_image from '../../components/images/protected.png'
import Support_image from '../../components/images/icon_3.svg'
import './advanteges.css'

export default function Advanteges() {
  return (
    <div className='container'>
        <div className="advanteges d-flex justify-content-between">
            <div className="advant">
                <div className="image-advant">
                    <img width={75} src={delivery_image} alt="" />
                </div>
                <h2>Free Delivery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, dolores.</p>
            </div>
            <div className="advant">
                <div className="image-advant">
                    <img width={75} src={Guarantee_image} alt="" />
                </div>
                <h2>Guarantee</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, dolores.</p>
            </div>
            <div className="advant">
                <div className="image-advant">
                    <img width={75} src={Support_image} alt="" />
                </div>
                <h2>Fast Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, dolores.</p>
            </div>
        </div>

        <hr />
        <div className="article">
            <h1>Read <span>Our</span> Article</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem excepturi quibusdam aliquam nihil veritatis dolor?</p>
            <hr className='m-5' />
            <h2><a href="">Read More...</a></h2>
        </div>
    </div>
  )
}
