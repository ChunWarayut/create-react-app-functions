/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {}
  onClick() {
    window.location.replace('/')
  }
  render() {
    return (
      <div>
        <h1>Create React App By ChunWarayut</h1>
        <h2>
          Subscribe with
          <a
            href="https://github.com/ChunWarayut"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub Now
          </a>
          !
        </h2>
      </div>
    )
  }
}

export default Home
