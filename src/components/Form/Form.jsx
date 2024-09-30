import React from 'react'
import styles from './Form.module.css'


const Form = ({children,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>{children}</form>
  )
}

export default Form