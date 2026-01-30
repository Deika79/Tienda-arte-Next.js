export const dynamic = "force-dynamic"
import styles from "./admin.module.css"


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
    <main className={styles.container}>
  <h1>Panel de pedidos</h1>

  {orders.length === 0 && <p>No hay pedidos todavía</p>}

  {orders.map((order, index) => (
    <div key={index} className={styles.card}>
      <p><strong>Obra:</strong> {order.slug}</p>
      <p><strong>Nombre:</strong> {order.name}</p>
      <p><strong>Email:</strong> {order.email}</p>
      <p>{order.message || "(sin mensaje)"}</p>
      <p className={styles.meta}>
        {new Date(order.date).toLocaleString()}
      </p>
    </div>
  ))}
</main>

  )
}
