import React from 'react'
import styles from './InputBox.module.css'

const InputBox = ({label,type, funcao}) => {
  return (
    <div className={styles.inputBox}>
        <label htmlFor={label}>{label}</label>
        <input type={type} id={label} onChange={(e)=> funcao(e.target.value)}/>
    </div>
  )
}

export default InputBox