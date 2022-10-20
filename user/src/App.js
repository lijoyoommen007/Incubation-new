import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import User from './Store/UserContext';
import Applications from './Store/ApplicationContext';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Booking from './pages/Booking';
import Records from './pages/Records';
import UsersAdmin from './pages/UserAdmin';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import Error from './pages/Error';

import './App.css';
import AdminLogin from './components/Admin/AdminLogin';


function App() {

  return (
    <Fragment>
      <User>
      <Applications>

   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>  
      <Route path='/login' element={<LoginPage/>}/>  
      <Route path='/Signup' element={<SignupPage/>}/>    

      <Route path='/admin/login' element={<AdminLogin/>}/>    
      <Route path='/admin' element={<Admin/>}/>    
      <Route path='/admin/records' element={<Records/>}/>    
      <Route path='/admin/booking' element={<Booking/>}/>    
      <Route path='/admin/users' element={<UsersAdmin/>}/>    

      <Route path='*' element={<Error/>}/>    
    </Routes>
   </Router>
   </Applications>

   </User>
   </Fragment>
  );
}

export default App;
