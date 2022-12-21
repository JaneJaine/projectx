import React, { Component } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export class NoMatch extends Component {
  render() {
    return (
      <React.Fragment>
        <Box>
          <h1>Impressum</h1>
          <Typography>Unser Kontakt bei geschäftlichen Anliegen.</Typography>
          <Typography>Arkin Cenk Cip <br/>Luca Isaak <br/>Julian Gottfried <br/>Jana Walcher</Typography>
        </Box>
      </React.Fragment>
    )
  }
}

export default NoMatch