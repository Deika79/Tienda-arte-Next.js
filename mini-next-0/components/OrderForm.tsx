"use client"

type Props = {
  slug: string
}

export default function OrderForm({ slug }: Props) {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug })
    })

    if (res.ok) {
      alert("Solicitud enviada correctamente")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Contactar / Comprar
      </button>
    </form>
  )
}
