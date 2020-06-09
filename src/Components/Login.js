import React from 'react'
import withState from '../hocs/withState'

let initialState = {
  username: '',
  password: ''
}

// Higher order component pattern


const Login = ({ handleChange, username, password, title }) => {
  return (
    <div>
      <h3>{title}</h3>
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
}

export default withState(Login, initialState)
