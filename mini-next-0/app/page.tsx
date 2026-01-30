import Link from "next/link"
import styles from "./home.module.css"

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Mini tienda de arte</h1>
      <p className={styles.subtitle}>
        Obras únicas · Contacto directo · Proyecto fullstack con Next.js
      </p>

      <div className={styles.grid}>
        <Link href="/gallery/cuadro-rojo" className={styles.cardLink}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Cuadro Rojo</p>
            <p>A. Rivera</p>
          </div>
        </Link>

        <Link href="/gallery/obra-azul" className={styles.cardLink}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Obra Azul</p>
            <p>L. Montes</p>
          </div>
        </Link>

        <Link href="/gallery/paisaje-nocturno" className={styles.cardLink}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Paisaje Nocturno</p>
            <p>C. Navarro</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
