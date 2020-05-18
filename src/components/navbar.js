import React from "react"
import styles from "../styles/navbar.module.css"
import logo from "../assets/AO logo.svg"
import BtnIcon from "./btnIcon"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo} />
      <BtnIcon></BtnIcon>
    </nav>
  )
}

export default Navbar
