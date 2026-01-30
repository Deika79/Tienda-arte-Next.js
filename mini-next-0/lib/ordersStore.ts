export type Order = {
  slug: string
  name: string
  email: string
  message: string
  date: string
}

// ⚠️ Esto vive en memoria
export const orders: Order[] = []
