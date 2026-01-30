import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  // Aquí verás en la terminal los datos enviados
  console.log("PEDIDO RECIBIDO:", body)

  // De momento simulamos guardado
  // Luego se podría guardar en DB o enviar email

  return NextResponse.json({
    success: true,
    message: "Pedido recibido"
  })
}
