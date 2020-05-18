import React from "react"
import styles from "./btnIcon"

const BtnIcon = props => {
  return (
    <button className={styles.button}>
      <img src={props.iconSrc} />
    </button>
  )
}

export default BtnIcon
