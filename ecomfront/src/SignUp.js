import React, { useState } from "react";
import {json, useNavigate} from 'react-router-dom';
import { useEffect} from 'react';

function SignUp() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    // const Navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
          navigate('/')
        }
      })
    
    const collectdata = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:4000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-type": "application/json"
            }

        })

        result = await result.json()
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/');

        console.log(result)
    }


    return (
        <div className="signup">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter name" />
            <input className="inputBox" value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="Enter Email" />
            <input className="inputBox" value={password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder="Enter Password" />
            <button onClick={collectdata} type="submit">submit</button>
            {/* <input type="text" placeholder="Enter name" /> */}
        </div>
    )
}

export default SignUp;