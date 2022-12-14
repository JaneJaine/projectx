import React, { Component } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export class NoMatch extends Component {
  render() {
    return (
      <React.Fragment>
        <Box>
          <h1>Contact</h1>
          <Typography>Wir sind eine Gruppe von vier Studierenden, die Ihnen bei Fragen gerne zur Verfügung stehen.</Typography>
          <Typography>Melden Sie sich gerne unter Tel: +49175 7948 2745</Typography>
        </Box>
      </React.Fragment>
    )
  }
}

export default NoMatch