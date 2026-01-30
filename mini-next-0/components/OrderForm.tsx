"use client"
import { useState } from "react"
import styles from "./OrderForm.module.css"


type Props = {
  slug: string
}

export default function OrderForm({ slug }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // Validaciones simples
    if (!name || !email) {
      alert("Nombre y email son obligatorios")
      setLoading(false)
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email no válido")
      setLoading(false)
      return
    }

    // Enviar datos al backend
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug, name, email, message })
    })

    if (res.ok) {
      alert("Solicitud enviada correctamente")
      // Limpiar formulario
      setName("")
      setEmail("")
      setMessage("")
    } else {
      alert("Error al enviar, intenta de nuevo")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
  <h3 className={styles.title}>Contactar / Comprar</h3>

  <div className={styles.field}>
    <input
      className={styles.input}
      placeholder="Nombre"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div className={styles.field}>
    <input
      className={styles.input}
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div className={styles.field}>
    <textarea
      className={styles.textarea}
      placeholder="Mensaje (opcional)"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows={4}
    />
  </div>

  <button className={styles.button} disabled={loading}>
    {loading ? "Enviando..." : "Enviar"}
  </button>
</form>

  )
}
