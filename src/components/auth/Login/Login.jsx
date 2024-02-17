import React, {useEffect, useState} from 'react'
import '../../auth/auth.css'
import user_logo from '../../images/user.png'
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AxiosInstance from "../../../auth/AxiosInstance";
import { toast } from 'react-toastify';
import axios from 'axios';


export default function Login() {
    const navigate=useNavigate()
    const [logindata, setLogindata]=useState({
        email:"",
        password:""
    })

    const handleOnchange=(e)=>{
        setLogindata({...logindata, [e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if (logindata) {
             const res = await axios.post('http://localhost:8000/auth/login/', logindata)
             const response= res.data
             const user={
                'full_name':response.full_name,
                'email':response.email
             }
               

             if (res.status === 200) {
                 localStorage.setItem('token', JSON.stringify(response.access_token))
                 localStorage.setItem('refresh_token', JSON.stringify(response.refresh_token))
                 localStorage.setItem('user', JSON.stringify(user))
                    navigate('/')
                 toast.success('login successful')
             }else{
                toast.error('something went wrong')
             }
        }
       
}

  return (
    <div className='login'>
        <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                    <img width={50} src={user_logo} alt="" />
                </div>
                <h3 className="text-center mb-4">
                    Have an account?
                </h3>
                <form action="#"  onSubmit={handleSubmit} className='login-form'>
                    <div className="form-group mt-5">
                        <input type="text" className='form-control rounded-left' value={logindata.email} name="email" onChange={handleOnchange} placeholder='Enter Your Email Please...' id="" />
                    </div>
                    <div className='form-group d-flex mt-5'>
                        <input type="password" className='form-control rounded-left' value={logindata.password} name="password" onChange={handleOnchange} placeholder='Your Password' id="" />
                    </div>
                    <div className='form-group mt-5'>
                        <Link to= '/Register'>create an Account</Link>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary rounded submit p-3 px-5" type="submit">Get Started</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}
