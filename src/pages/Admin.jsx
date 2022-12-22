import React, { Component } from 'react';
import { Box } from '@mui/material';
import AdminFilterPane from '../components/AdminFilterPane';

export class ReportPage extends Component {
    //loads the AdminFilterPane and gives basic styling to the component
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