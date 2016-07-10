import React from 'react'
import Firebase from '../lib/firebaseInit'

var CreateForm = React.createClass({

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
    e.preventDefault()
    const email = this.state.email.trim()
    const password = this.state.password.trim()

    if (!email || !password) {
      return
    }

    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
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
        <h2>Create</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Email'
            onChange={this.handleEmailChange}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={this.handlePasswordChange}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
})

export default CreateForm
