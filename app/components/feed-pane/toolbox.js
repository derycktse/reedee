import React from 'react'
import styles from './feed-view.css'
import TextField from 'material-ui/TextField';
export default function ToolBox() {
  return (
    <div className={styles['tool-box']}>
      <a href=""><i className="material-icons md-icon dp48">done_all</i></a>
      <TextField
        hintText="Hint Text"
      />
      <a href=""><i className="material-icons md-icon dp48">search</i></a>
    </div>
  )
}
