/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

class NotFound extends Component {
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
      <div className="error">
        <div className="error__content">
          <h2>500</h2>
          <h3>Something went wrong!</h3>
          <p>There was a problem on our end. Please try again later.</p>
          <button type="button" className="btn btn-accent btn-pill" onClick={this.onClick}>
                    &larr; Go Back
          </button>
        </div>
      </div>
    )
  }
}

export default NotFound
