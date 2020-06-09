import React, { Component } from 'react'

const withState = (WrappedComponent, initialData) => {
  return class extends Component {
    constructor() {
      super()
      this.state = initialData
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleChange={this.handleChange}
        />
      )
    }
  }
}

export default withState