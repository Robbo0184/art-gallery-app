import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtPiecePreview({ slug, image, title, artist }) {
  const router = useRouter();
  router.push({ slug });
  return (
    <Link href={`art-pieces/${slug}`}>
      <img
        width={200}
        height={200}
        src={image}
        alt={`artpiece is called ${title}`}
      />
      {title ? <h2>{title}</h2> : null}
      <span>{artist}</span>
    </Link>
  );
}
