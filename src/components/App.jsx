import React from 'react'
import ReactDOM from 'react-dom'
import VideoList from './VideoList.jsx'
import LoginForm from './LoginForm.jsx'
import CreateForm from './CreateForm.jsx'
import LogoutButton from './LogoutButton.jsx'

var App = React.createClass({
  render: function () {
    return (
      <div>
        <LoginForm />
        <CreateForm />
        <LogoutButton />
        <VideoList />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
