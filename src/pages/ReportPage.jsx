import React, { Component } from 'react'
import {Box } from '@mui/material'
import Report from '../components/Report'
import Navbar from '../components/Navbar'

export class ReportPage extends Component {
    //loads the report page and gives basic styling
    render() {
        return (
            <React.Fragment>
                <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
                    <Report />
                </Box>
            </React.Fragment>
        )
    }
}

export default ReportPage