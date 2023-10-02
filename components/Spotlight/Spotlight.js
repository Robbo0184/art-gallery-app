import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ image, artist, slug }) {
  return (
    <div>
      <ArtPiecePreview slug={slug} image={image} artist={artist} />
    </div>
  );
}
