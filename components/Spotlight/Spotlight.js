import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ title, image, artist, slug, isFavourite, onToggleFavourite }) {
  return (
    <div>
      <ArtPiecePreview title={title} slug={slug} image={image} artist={artist} isFavourite={isFavourite} onToggleFavourite={onToggleFavourite} />
      
    </div>
  );
}
