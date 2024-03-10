import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState()
    const navigate=useNavigate()

    const handlesubmit=async (e)=>{
        
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
          alert('Email and password are required');
          return;
        }
        await axios.post('http://localhost:3001/login',{email,password})
        .then(result=> {
            console.log(result)
            if(result.data==="success"){
                navigate('/home')
            }
          
        })
        .catch(err=>console.log(err))
        
      }

    return (
        <>
<div className='LoginForm flex justify-center items-center h-screen bg-black'>
  <form onSubmit={handlesubmit} className="max-w-md bg-white shadow-md 
    bg-gradient-to-b from-red-700 to-gray-700 rounded px-10 pt-8 pb-10">
    <div className="flex justify-center">
    <p className='mb-4 text-white'>login page</p>
    </div>
    <input
      type='email'
      placeholder='Enter email'
      onChange={(e) => setemail(e.target.value)}
      className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <input
      type='password'
      placeholder='Enter password'
      onChange={(e) => setpassword(e.target.value)}
      className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <div className="flex justify-center">
    <button
      type='submit'
      className=" bg-gradient-to-l from-pink-500 to-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
      rounded focus:outline-none focus:shadow-outline"
    >
      Login
    </button>
    </div>
  </form>
</div>
        </>

    );
}
export default Login;