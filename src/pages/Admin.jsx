import React, { Component } from 'react';
import {Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { DropdownList } from 'react-widgets/cjs';
import AdminFilter from '../components/AdminFilter';
import NavbarAdmin from '../components/NavbarAdmin';


export class ReportPage extends Component {
    render() {
        return (
            <React.Fragment>
             
                <Box sx={{
                     backgroundColor: "#E6F0FF", 
                     minHeight: "80vh",
                     alignItems: "center",
                     justifyContent: "center",
                     gap: "2.5rem", 
                     flex: "1"
                     }}>
                    <NavbarAdmin />
                    <h1>Admin View </h1>
                    <AdminFilter filterItems={["Defekt","Verschmutzung","Parkverstoß", "Anderes", "deineMum"]} dropDownName = "Mangelart" defaultItem = "1"/>
                    <h2> Überschrift 2</h2>

                </Box>
                 {/* */}
            </React.Fragment>
        )
    }
}

export default ReportPage