import React from 'react'
import Firebase from '../lib/firebaseInit'

var LogoutButton = React.createClass({

  handleClick: function () {
    Firebase.auth().signOut()
  },

  render: function () {
    return (
      <button onClick={this.handleClick}>Logout</button>
    )
  }
})

export default LogoutButton
