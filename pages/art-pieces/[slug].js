import { ArtPieceDetails } from "@/components/ArtPiece/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);
  console.log(pieces.slug);
  return (
    <ArtPieceDetails
      name={piece.name}
      image={piece.imageSource}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
