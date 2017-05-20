import React from 'react'
import styles from './Starter.css'

class StarterComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { likes: 0 }
    this.onLike = this.onLike.bind(this)
  }

  onLike () {
    let newLikesCount = this.state.likes += 1
    this.setState({ likes: newLikesCount })
  }

  render () {
    return (
      <div>
        Likes: <span className={styles.header}>{this.state.likes}</span>
        <div><button onClick={this.onLike}>Like</button></div>
      </div>
    )
  }
}

export default StarterComponent
