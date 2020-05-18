import React from "react"
import styles from "../styles/btnIcon.module.css"

const BtnIcon = props => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <img src={props.iconSrc} />
    </button>
  )
}

export default BtnIcon
