import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState()
    const navigate=useNavigate()

    const handlesubmit=async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:3001/login',{email,password})
        .then(result=> {
            console.log(result)
            if(result.data==="success"){
                navigate('/Home')
            }
          
        })
        .catch(err=>console.log(err))
        
      }

    return (
        <>

            <form onSubmit={handlesubmit}>
                <input type='email'
                    placeholder='enter email'
                    onChange={(e) => setemail(e.target.value)} />
                {email}
                <input type='password'
                    placeholder='enter password'
                    onChange={(e) => setpassword(e.target.value)} />{password}

                <button type='submit'>login</button>
            </form>
        </>

    );
}
export default Login;