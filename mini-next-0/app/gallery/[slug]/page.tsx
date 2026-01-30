import { artworks } from "@/lib/artworks"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import OrderForm from "@/components/OrderForm"
import styles from "./artwork.module.css"


type Props = {
  params: Promise<{
    slug: string
  }>
}

// Página de la obra (SSR)
export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params

  const artwork = artworks.find(
    (art) => art.slug === slug
  )

  if (!artwork) {
    notFound()
  }

  return (
  <main className={styles.container}>
    <h1 className={styles.title}>{artwork.title}</h1>

    <Image
      src={artwork.image}
      alt={artwork.title}
      width={600}
      height={400}
      className={styles.image}
    />

    <p className={styles.info}>
      <strong>Artista:</strong> {artwork.artist}
    </p>

    <p className={styles.price}>
      {artwork.price} €
    </p>

    <p>{artwork.description}</p>

    <OrderForm slug={artwork.slug} />
  </main>
)

}

// SEO dinámico por obra
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params

  const artwork = artworks.find(
    (art) => art.slug === slug
  )

  if (!artwork) {
    return {
      title: "Obra no encontrada"
    }
  }

  return {
    title: artwork.title,
    description: artwork.description
  }
}
