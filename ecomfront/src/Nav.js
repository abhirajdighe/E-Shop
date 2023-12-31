
import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import { useNavigate } from 'react-router-dom';


function Nav(){
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    const logOut=()=>{
        localStorage.clear();
        navigate('/SignUp');
    }
    return(
        <div>
            <img alt='logo' className='logo' src='data:image/jpeg;base64,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 ' />
            {
                
               auth ? <ul className="nav-ul align ">
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logOut} to='/logout'>log out ({JSON.parse(auth).name})</Link></li>
                </ul>
                :<ul className="nav-ul nav-right">
                    <li><Link to='/signup'>Sign-up</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            }
            
            
        </div>
    )
}

export default Nav;