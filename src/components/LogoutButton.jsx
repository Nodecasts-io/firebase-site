import React from 'react'
import Firebase from '../lib/firebaseInit'

var LogoutButton = React.createClass({

  handleClick: function () {
    Firebase.auth().signOut()
  },

  render: function () {
    return (
      <button className='button is-primary' onClick={this.handleClick}>Logout</button>
    )
  }
})

export default LogoutButton
