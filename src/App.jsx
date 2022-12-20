import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import ReportPage from './pages/ReportPage';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Confirmation from './pages/Confirmation';
import Navbar from './components/Navbar';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#E6F0FF" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/report" element={<ReportPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route element={<NoMatch />}></Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </React.Fragment>
  );
}

export default App;
