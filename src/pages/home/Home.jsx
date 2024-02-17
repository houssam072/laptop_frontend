import React, {useEffect} from 'react'
import './home.css'
import TopCards from '../topCard/TopCards'
import TopProduct from '../topProduct/TopProduct'
import Advanteges from '../advanteges/Advanteges'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import { useNavigate } from "react-router-dom";
import axios from 'axios'



export default function Home() {
  const jwt=localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();

   useEffect(() => {
     if (jwt === null && !user) {
         navigate('/login')
     }else{
      getSomeData()
     }
     
   }, [jwt, user])
   
  const getSomeData =async ()=>{
    const res =await axios.get('http://localhost:8000/category/get_category')
    console.log(res.data)
}
  return (
    <div className='home'>
        <Hero />
        <TopCards />
        <TopProduct />
        <Advanteges />
        <Footer />
    </div>
  )
}
