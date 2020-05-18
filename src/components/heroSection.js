import React from "react"
import styles from "../styles/heroSection.module.css"

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heroContent}>
        <h3 className={styles.h3}>Alejandro Oliva Moreno</h3>
        <h1 className={styles.h1}>Diseñador UI/UX</h1>
        <div className={styles.background}></div>
      </div>
    </section>
  )
}

export default HeroSection
