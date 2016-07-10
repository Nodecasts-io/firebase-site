import React from 'react';
import ReactFireMixin from 'reactfire';
import Firebase from '../lib/firebaseInit';
import { StyleSheet, css } from 'aphrodite';

var Login = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = Firebase.database().ref('items');
    this.bindAsArray(ref, 'items');
  },
  render: function() {
    return (
      <ul>
      {this.state.items.map((item) => {
        return <li key={item['.key']} className={css(styles.noStyle)}>
          {item['.value']}
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
