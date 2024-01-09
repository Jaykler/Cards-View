import React from 'react'
import styles from './user.module.css'

const Card = (props) => {
  const {id, username, email, phone} = props.info

  const randomColor = () => {
    const color = ['beige', 'lightyellow', '#cacaca', 'lightgreen', 'lightblue', 'white', 'purple', 'blue', 'green', 'red', 'brown', 'gray']
    const r = Math.floor(Math.random() * color.length + 1)
    return color[r]
  }
  return (
    <div className={styles.container} style={{backgroundColor: randomColor()}}>
      <div className={styles.id}>{id}</div>
      <h1 className={styles.username}>{username}</h1>
      <div className={styles.email}>{email}</div>
      <div className={styles.phone}>{phone}</div>
    </div>
  )
}

export default Card;