import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useRouter } from "next/router";

export default function FavouritesPage({
  favouritedPieces,
  onToggleFavourite,
  artPiecesInfo,
}) {
  const { query } = useRouter();
  return (
    <ul>
      <h3>{favouritedPieces.length} piece(s) are liked.</h3>
      <ArtPieces
        onToggleFavourite={onToggleFavourite}
        pieces={favouritedPieces}
        artPiecesInfo={artPiecesInfo}
        slug={query.slug}
      />
    </ul>
  );
}
