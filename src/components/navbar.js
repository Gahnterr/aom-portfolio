import React from "react"
import styles from "../styles/navbar.module.css"
import logo from "../assets/AO logo.svg"
import menuIcon from "../assets/Menu-icon.svg"
import BtnIcon from "./btnIcon"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.justifiedLeft}>
        <img
          className={styles.logo}
          src={logo}
          alt="Logotipo de mi página de portafolio."
        />
      </div>
      <div className={styles.justifiedRight}>
        <BtnIcon
          iconSrc={menuIcon}
          imgAlt="Botón para desplegar menú."
        ></BtnIcon>
      </div>
      <div className={styles.background}></div>
    </nav>
  )
}

export default Navbar
