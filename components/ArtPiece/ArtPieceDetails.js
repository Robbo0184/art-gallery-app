export function ArtPieceDetails({ slug, image, name, artist, year, genre }) {
  return (
    <div>
      {" "}
      {slug} {year} {genre}
      <img width={400} height={400} src={image} alt="artpiece" />
      <span>{`Famous Painting ${name} by Famous Artist: ${artist}`}</span>
      <div className="section--comments"></div>
      <div className="section--comment">
        {" "}
        <label>Add comment:</label>
        <input type="text-box"></input>
        <button>Send</button>
      </div>
    </div>
  );
}
