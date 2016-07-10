import React from 'react'
import Firebase from '../lib/firebaseInit'

var LoginForm = React.createClass({

  getInitialState: function () {
    return {
      email: '',
      password: ''
    }
  },

  handleEmailChange: function (e) {
    this.setState({email: e.target.value})
  },

  handlePasswordChange: function (e) {
    this.setState({password: e.target.value})
  },

  handleSubmit: function (e) {
    const email = this.state.email.trim()
    const password = this.state.password.trim()

    if (!email || !password) {
      return
    }

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })

    this.setState({email: '', password: ''})
  },

  render: function () {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            type='text'
            className='input'
            placeholder='Email'
            onChange={this.handleEmailChange}
          />
          <input
            type='password'
            className='input'
            placeholder='Password'
            onChange={this.handlePasswordChange}
          />
          <button className='button is-primary'>Submit</button>
        </form>
      </div>
    )
  }
})

export default LoginForm
