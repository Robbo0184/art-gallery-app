import Link from "next/link";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
export function ArtPieceDetails({ slug, image, name, artist, year, genre }) {
  console.log(genre);
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
        <FavouriteButton  isFavourite={isFavourite} onToggleFavorite={onToggleFavorite}/>
      </div>
    </div>
  );
}
