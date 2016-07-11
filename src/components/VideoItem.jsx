import React from 'react'

var VideoItem = React.createClass({

  render: function () {
    return (
      <li key={this.props.id}>
        {this.props.title}
      </li>
    )
  }
})

export default VideoItem
