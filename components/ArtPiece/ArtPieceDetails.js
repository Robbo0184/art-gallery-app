import FavouriteButton from "../FavouriteButton/FavouriteButton";
import CommentForm from "../CommentForm/CommentForm";
export function ArtPieceDetails({
  isFavourite,
  onToggleFavourite,
  slug,
  image,
  name,
  artist,
  year,
  onSubmitComment,
  genre,
}) {
  return (
    <div>
      {year} {genre}
      <img width={400} height={400} src={image} alt="artpiece" />
      <span>{`Famous Painting ${name} by Famous Artist: ${artist}`}</span>
      <div className="section--comments"></div>
      <div className="section--comment">
        {" "}
        <CommentForm onSubmitComment={onSubmitComment} />
        <FavouriteButton
          slug={slug}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </div>
    </div>
  );
}
