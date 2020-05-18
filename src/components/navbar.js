import React from "react"
import styles from "../styles/navbar.module.css"
import logo from "../assets/AO logo.svg"
import menuIcon from "../assets/Menu icon.svg"
import BtnIcon from "./btnIcon"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.justifiedLeft}>
        <img className={styles.logo} src={logo} />
      </div>
      <div className={styles.justifiedRight}>
        <BtnIcon iconSrc={menuIcon}></BtnIcon>
      </div>
    </nav>
  )
}

export default Navbar
