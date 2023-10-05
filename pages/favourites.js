import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useRouter } from "next/router";

export default function FavouritesPage({
  pieces,
  onFavourite,
  favourites,
}) {
  const favouritePieces = pieces.filter((piece => favourites.includes(piece.slug)
  ))

  if(!favouritePieces.length) return <p>No favourites to display.</p>

  return (
    <ul>
      <h3>{favouritePieces.length} piece(s) are liked.</h3>
      <ArtPieces
        onFavourite={onFavourite}
        pieces={favouritePieces}
        favourites={favourites}
      />
    </ul>
  );
}
