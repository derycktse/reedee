// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import { ipcRenderer } from 'electron';

export default class Home extends Component {
  componentDidMount() {

  }
  getToken() {
    ipcRenderer.send('oauth')
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home testing</h2>
          <Link to="/counter">to Counter</Link>
          <br />
          <Link to="/reedee">to Reedee</Link>
          <button onClick={this.getToken}>get token</button>
        </div>
      </div >
    );
  }
}
