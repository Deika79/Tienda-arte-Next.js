import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  console.log("PEDIDO RECIBIDO:", body)

  return NextResponse.json({
    success: true
  })
}
