import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  favourites,
  onFavourite
}) {
  return (
    <ArtPieces
      pieces={pieces}
      favourites={favourites}
      onFavourite={onFavourite}
    />
  );
}
