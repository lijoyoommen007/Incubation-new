import './App.css';
import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import User from './Store/UserContext';
import SignupPage from './pages/signupPage';
import LoginPage from './pages/loginPage';
import Home from './pages/Home';
import Applications from './Store/Applications';



function App() {
 
  return (
    <Fragment>
      <User>
        <Applications>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='/signup' element={<SignupPage/>}/>
            <Route  path='/login' element={<LoginPage/> }/>
          </Routes>
        </Router>
        </Applications>
      </User>
    </Fragment>
  );
}

export default App;
