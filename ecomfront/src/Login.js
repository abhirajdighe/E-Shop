import React, { useEffect } from 'react';
// import User from '/Users';
import { useNavigate } from 'react-router-dom'
import { useActionData } from 'react-router-dom';

function Login(){
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate("/")
        }
    },[])
    const handleLogin= async () =>{
        console.log(email,password)
        let result = await fetch('http://127.0.0.1:4000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")
        }else{
            alert("Please enter valid details.")
        }
    }
    return (
        <div className='login'>
            <h1>Log in</h1>
            <input type="text" className='inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
            <input type="password" className='inputBox' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password' />
            <button  onClick={handleLogin} type='button' >Log in</button>
        </div>
    )
}

export default Login;