import { ArtPieceDetails } from "@/components/ArtPiece/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const { query } = useRouter();
  const piece = pieces.find((piece) => piece.slug === query.slug);
  return (
    <div>
      <ArtPieceDetails
        year={piece.year}
        genre={piece.genre}
        title={piece.title}
        image={piece.image}
        artist={piece.artist}
      />
    </div>
  );
}
