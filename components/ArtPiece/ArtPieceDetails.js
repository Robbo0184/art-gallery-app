import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";



export function ArtPieceDetails({
  isFavourite,
  onFavourite,
  piece



}) {

  return (
    <ArtPiecePreview isFavourite={isFavourite} onFavourite={() => onFavourite(piece, isFavourite)} piece={piece} />
  );
}

