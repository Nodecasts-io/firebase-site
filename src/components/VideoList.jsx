import React from 'react'
import ReactFireMixin from 'reactfire'
import Firebase from '../lib/firebaseInit'
import VideoItem from './VideoItem.jsx'
import { StyleSheet, css } from 'aphrodite'

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
          return <li key={video['.key']} className={css(styles.noStyle)}>
            {video['.value']}
          </li>
        })}
        </ul>
      </div>
    )
  }
})

const styles = StyleSheet.create({
  noStyle: {
    listStyle: 'none'
  }
})

export default VideoList
