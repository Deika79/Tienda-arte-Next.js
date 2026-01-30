import Link from "next/link"
import Image from "next/image"

type Props = {
  slug: string
  title: string
  artist: string
  price: number
  image: string
}

export default function ArtworkCard({
  slug,
  title,
  artist,
  price,
  image
}: Props) {
  return (
    <Link href={`/gallery/${slug}`} className="card">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
      />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{price} €</p>
    </Link>
  )
}
