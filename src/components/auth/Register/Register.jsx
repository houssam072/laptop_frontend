import React, { useState } from 'react'
import '../../auth/auth.css'
import user_logo from '../../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from "react-toastify";

export default function Register() {
    const navigate=useNavigate()
    const [formdata, setFormdata] = useState({
        email:"",
        mobile_number: "",
        first_name:"",
        last_name:"",
        password:"",
        password2:""

    })
    
    const handleOnchange = (e)=>{
        setFormdata({...formdata, [e.target.name]:e.target.value})
    }
    const {email,mobile_number, first_name, last_name, password, password2}=formdata
    const handleSubmit =async (e)=>{
        e.preventDefault()
       const response = await axios.post('http://localhost:8000/auth/register/',formdata)
       console.log(response.data)
       const result=response.data
       if (response.status === 201) {
          navigate("/login")
          toast.success(result.message)
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
                    New account?
                </h3>
                <form action="#" onSubmit={handleSubmit} className='login-form'>
                    <div className="form-group mt-5">
                        <input type="email" className='form-control rounded-left' onChange={handleOnchange} name="email" value={email}  placeholder='Enter Your Email Please...' id="" />
                    </div>
                    <div className="form-group mt-5">
                        <input type="number" className='form-control rounded-left' onChange={handleOnchange} name="mobile_number" value={mobile_number}  placeholder='Enter Your Mobile Number Please...' id="" />
                    </div>
                    <div className='form-group mt-5'>
                        <input type="text" className='form-control rounded-left' onChange={handleOnchange} name="first_name" value={first_name}  placeholder='First Name' id="" />
                    </div>
                    <div className='form-group mt-5'>
                        <input type="text" className='form-control rounded-left' onChange={handleOnchange} name="last_name" value={last_name} placeholder='Last Name' id="" />
                    </div>
                    <div className='form-group mt-5'>
                        <input type="password" className='form-control rounded-left' onChange={handleOnchange} name="password" value={password}  placeholder='Your Password' id="" />
                    </div>
                    <div className='form-group mt-5'>
                        <input type="password" className='form-control rounded-left' onChange={handleOnchange} name="password2" value={password2} placeholder='Repeat Your Password' id="" />
                    </div>
                    <div className='form-group mt-5'>
                        <Link to = '/login'>You have an Account</Link>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary rounded submit p-3 px-5" type="submit" value="Get Started"></input>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}
