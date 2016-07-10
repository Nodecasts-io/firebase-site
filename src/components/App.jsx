import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Login />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
