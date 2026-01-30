export const dynamic = "force-dynamic"

type Order = {
  slug: string
  name: string
  email: string
  message: string
  date: string
}

async function getOrders(): Promise<Order[]> {
  const res = await fetch("http://localhost:3000/api/orders", {
    cache: "no-store"
  })

  return res.json()
}

export default async function AdminPage() {
  const orders = await getOrders()

  return (
    <main style={{ padding: "24px" }}>
      <h1>Panel de pedidos</h1>

      {orders.length === 0 && (
        <p>No hay pedidos todavía</p>
      )}

      {orders.map((order, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginTop: "12px"
          }}
        >
          <p><strong>Obra:</strong> {order.slug}</p>
          <p><strong>Nombre:</strong> {order.name}</p>
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Mensaje:</strong> {order.message || "(sin mensaje)"}</p>
          <p style={{ fontSize: "12px", color: "#666" }}>
            {new Date(order.date).toLocaleString()}
          </p>
        </div>
      ))}
    </main>
  )
}
