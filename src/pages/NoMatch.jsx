import React, { Component } from 'react'

export class NoMatch extends Component {
  //shown when navigation fails or the user navigates to a page that does not exist
  render() {
    return (
      <React.Fragment>
        <h1>Error 404</h1>
        <h2>Webpage not found</h2>
        <h3>Please check your connection and reload the page</h3>
      </React.Fragment>
    )
  }
}

export default NoMatch