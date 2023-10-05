import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";


export default function Spotlight({
  piece, 
  onFavourite,
  isFavourite,
 
}) {
  return (
    <div>
      <ArtPiecePreview
        isFavourite={isFavourite}
        onFavourite={onFavourite}
        piece={piece}
        />
    </div>
  )
}