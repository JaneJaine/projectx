import React, { Component } from 'react'
import Hero from '../components/Hero'

export class Home extends Component {
  //loads the hero component
  render() {
    return (
      <React.Fragment>
        <Hero />
      </React.Fragment>
    )
  }
}

export default Home