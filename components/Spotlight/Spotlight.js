import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

export default function Spotlight({ image, artist, slug }) {
  return (
    <div>
      <ArtPiecePreview slug={slug} image={image} artist={artist} />
      
    </div>
  );
}
