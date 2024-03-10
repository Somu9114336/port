import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [error, setError] = useState('');
 const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('all fields are required');
      return;
    }
    if (name.length < 3) {
      setError('Name must be at least 3 characters long');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    axios.post('http://localhost:3001/Signup',{name,email,password})
    .then(result=> {console.log(result)
      navigate('/login')
    })
    .catch(err=>console.log(err))
    
  }

  return (
    <div className="p-6 w-full h-screen bg-black ">
  <form onSubmit={handlesubmit} className="max-w-sm mx-auto">
    <h1 className="text-2xl font-bold mb-4 text-white flex justify-center">Signup Page</h1>
    <input
      type="text"
      autoComplete="off"
      placeholder="Enter name"
      onChange={(e) => setname(e.target.value)}
      className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:border-cyan-500"
    />
    <input
      type="email"
      autoComplete="off"
      placeholder="Enter email"
      onChange={(e) => setemail(e.target.value)}
      className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
    <input
      type="password"
      placeholder="Enter password"
      onChange={(e) => setpassword(e.target.value)}
      className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
     {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
    <button type="submit" className="w-full text-white py-2 px-4 rounded-md 
    bg-gradient-to-l from-pink-500 to-blue-500 cursor-pointer">
      Register
    </button>
  </form>
  <p className="text-center mt-4 text-white">
    Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
  </p>
</div>
  )
}
export default Signup;
