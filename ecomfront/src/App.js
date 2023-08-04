import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import SignUp from './SignUp';
import AddProduct from './AddProduct';
import PrivateComponent from './PrivateComponent';
import Login from './Login';
import {Routes,Route,BrowserRouter as Router,Link} from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  
  return (
    <div>
    
    <Router>     
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<h1>product listing component</h1>} />
          <Route path='/add' element={<AddProduct/>} />
          <Route path='/update' element={<h1> update product component</h1>} />
          <Route path='/logout' element={<h1>log out component</h1>} />
          <Route path='/profile' element={<h1>Profile component</h1>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
 
    </Router>
    <Footer />

    </div>

  );
}

export default App;
