import { Component } from 'react'


export default class StateTracker extends Component {
  constructor(props){
    super()
    this.state = props.initialState
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  render(){
    return this.props.render({
      ...this.state,
      handleChange: this.handleChange
    })
  }
}