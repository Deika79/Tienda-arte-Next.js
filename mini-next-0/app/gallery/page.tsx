import { artworks } from "@/lib/artworks"
import ArtworkCard from "@/components/ArtworkCard"

export default function GalleryPage() {
  return (
    <main>
      <h1>Galería</h1>

      <section className="grid">
        {artworks.map((art) => (
          <ArtworkCard
            key={art.slug}
            slug={art.slug}
            title={art.title}
            artist={art.artist}
            price={art.price}
            image={art.image}
          />
        ))}
      </section>
    </main>
  )
}
