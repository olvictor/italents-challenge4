import React from 'react'
import styles from './Button.module.css'


const Button = ({type,text}) => {
  return (
    <button className={styles.buttonForm} type={type}>{text}</button>
  )
}

export default Button