import React, { Component } from 'react';
import { Box } from '@mui/material';
import AdminFilter from '../components/AdminFilter';
import NavbarAdmin from '../components/NavbarAdmin';
import SearchBarAsynchronous from '../components/AsynchronousSerachBar';
import { ColorLens, SportsRugbySharp } from '@mui/icons-material';
import { Stack } from '@mui/system';
import CustomButton from '../components/CustomButton';
import AdminFilterPane from '../components/AdminFilterPane';



export class ReportPage extends Component {
    render() {
        return (
            <React.Fragment>

                <Box sx={{
                    backgroundColor: "#d7e3fc",
                    minHeight: "100vh",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20.5rem",
                    flex: "2",
                    flexDirection: 'column'
                }}>
                
                    <AdminFilterPane authData={this.props.authData}/>
                </Box>
            </React.Fragment>
        )
    }
}
export default ReportPage