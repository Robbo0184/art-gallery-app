import FavouriteButton from "../FavouriteButton/FavouriteButton";
export function ArtPieceDetails({
  isFavourite,
  onToggleFavourite,
  slug,
  image,
  name,
  artist,
  year,
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
        <label>Add comment:</label>
        <input type="text-box"></input>
        <button>Send</button>
        <FavouriteButton
          slug={slug}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </div>
    </div>
  );
}
