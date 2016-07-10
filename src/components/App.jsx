import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './LoginForm.jsx'
import CreateForm from './CreateForm.jsx'
import VideoList from './VideoList.jsx'

var App = React.createClass({
  render: function () {
    return (
      <div>
        <LoginForm />
        <CreateForm />
        <VideoList />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
