import React, { Component } from 'react'

export class NoMatch extends Component {
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