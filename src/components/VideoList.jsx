import React from 'react'
import ReactFireMixin from 'reactfire'
import Firebase from '../lib/firebaseInit'
import VideoItem from './VideoItem.jsx'

var VideoList = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function () {
    var ref = Firebase.database().ref('videos')
    this.bindAsArray(ref, 'videos')
  },

  render: function () {
    return (
      <div className="column is-one-third">
        <h2>Our Videos</h2>
        <ul>
        {this.state.videos.map((video) => {
          return <VideoItem
            key={video['.key']}
            id={video['.key']}
            title={video['.value']}
          />
        })}
        </ul>
      </div>
    )
  }
})

export default VideoList
