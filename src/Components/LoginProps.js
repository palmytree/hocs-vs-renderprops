import React from 'react'
import StateTracker from './StateTracker'

let initialState = {
  username: '',
  password: ''
}

// Render Props Pattern

const Login = props => {
  return (
    <StateTracker
      initialState={initialState}
      render={({ username, password, handleChange }) => {
        return (
          <div>
            <h3>{props.title}</h3>
            <input
              name='username'
              value={username}
              onChange={handleChange}
              placeholder='Username'
            />
            <input
              name='password'
              value={password}
              onChange={handleChange}
              placeholder='Password'
            />
          </div>
        )
      }}
    />
  )
}

export default Login
