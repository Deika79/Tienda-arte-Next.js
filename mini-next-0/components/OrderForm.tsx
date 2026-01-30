"use client"
import { useState } from "react"

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
    <form onSubmit={handleSubmit} style={{ marginTop: "24px" }}>
      <h3>Contactar / Comprar</h3>

      <div>
        <label>
          Nombre:* <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "300px", padding: "6px" }}
          />
        </label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <label>
          Email:* <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "300px", padding: "6px" }}
          />
        </label>
      </div>

      <div style={{ marginTop: "12px" }}>
        <label>
          Mensaje: <br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{ width: "300px", padding: "6px" }}
          ></textarea>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "16px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}
