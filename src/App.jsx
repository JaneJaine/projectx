import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import ReportPage from './pages/ReportPage';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Confirmation from './pages/Confirmation';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';

function App() {
  //saves the session token and user mail to authenticate backend requests in the admin view
  const [authData, setAuthData] = useState({
    token: null,
    usermail: null
  });
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#E6F0FF" }}>
        <BrowserRouter>
          <Navbar authData={authData} setAuthData={setAuthData} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/report" element={<ReportPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin authData={authData} />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/impressum" element={<Confirmation />} />
            <Route element={<NoMatch />}></Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </React.Fragment>
  );
}

export default App;
