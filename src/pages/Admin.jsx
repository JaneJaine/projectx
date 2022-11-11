import React, { Component } from 'react'
import {Box } from '@mui/material'
import AddressForm from '../components/AddressForm'
import Checkout from '../components/Checkout'
import Navbar from '../components/Navbar'

export class ReportPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
                    <Navbar />
                    <h1>Admin View </h1>
                </Box>
            </React.Fragment>
        )
    }
}

export default ReportPage