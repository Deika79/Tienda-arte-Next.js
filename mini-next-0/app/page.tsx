import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Galería de Arte</h1>
      <p>Una pequeña colección de obras únicas.</p>

      <nav>
        <Link href="/gallery">Ver galería</Link>
      </nav>
    </main>
  )
}
