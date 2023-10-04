import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";


export default function Spotlight({
  image,
  artist,
  slug,
  onToggleFavourite,
  isFavourite,
  colors
}) {
  return (
    <div>
      <ArtPiecePreview
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
        slug={slug}
        image={image}
        artist={artist}
        colors={colors} />
    </div>
  )
}