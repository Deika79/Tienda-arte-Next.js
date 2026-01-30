import { NextResponse } from "next/server"
import { orders, type Order } from "@/lib/ordersStore"

export async function POST(request: Request) {
  const body = await request.json()

  const newOrder: Order = {
    slug: body.slug,
    name: body.name,
    email: body.email,
    message: body.message,
    date: new Date().toISOString()
  }

  orders.push(newOrder)

  console.log("📦 Pedido guardado:", newOrder)
  console.log("📊 Total pedidos:", orders.length)

  return NextResponse.json({ success: true })
}

export async function GET() {
  return NextResponse.json(orders)
}
