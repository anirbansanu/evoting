import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Footer from './components/footer';
import Voting from './pages/Voting';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const theme = createTheme();


const App =()=>{
    return (
    <ThemeProvider theme={theme}>
    <Container component="main">
    <CssBaseline />
    <Router>
      <ToastContainer/> 
      <Header/>
      
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/voting" element={<Voting />} />
          </Routes>
        
    
      <Footer/>
      </Router>
      </Container>
      </ThemeProvider>  
    )
  }

export default App;