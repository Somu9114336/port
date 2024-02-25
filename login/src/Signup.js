import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
const navigate=useNavigate()

  const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/Signup',{name,email,password})
    .then(result=> {console.log(result)
      navigate('/login')
    })
    .catch(err=>console.log(err))
    
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>

        <h1>signup page</h1>
        <input type='text'
          autoComplete='off'
          placeholder='enter name'
          onChange={(e) => setname(e.target.value)} />
        
        <input type='Email'
        autoComplete='off'
          placeholder='enter email'
          onChange={(e) => setemail(e.target.value)} />

        <input type='password'
          placeholder='enter password'
          onChange={(e) => setpassword(e.target.value)} />

       

        <button type='submit'>register</button>
      </form>
      <Link to="/login">Login</Link>

    </div>
  )
}
export default Signup;
