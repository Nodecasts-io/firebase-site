import React from 'react';
import ReactFireMixin from 'reactfire';
import Firebase from '../lib/firebaseInit';
import { StyleSheet, css } from 'aphrodite';

var Login = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = Firebase.database().ref('videos');
    this.bindAsArray(ref, 'videos');
  },

  render: function() {
    return (
      <ul>
      {this.state.videos.map((video) => {
        return <li key={video['.key']} className={css(styles.noStyle)}>
          {video['.value']}
        </li>
      })}
      </ul>
    )
  }
});

const styles = StyleSheet.create({
  noStyle: {
    listStyle: 'none'
  },
});

export default Login;
