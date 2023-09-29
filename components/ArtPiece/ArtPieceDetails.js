import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <img width={400} height={400} src={image} alt="artpiece" />
      <span>{`Famous Painting ${title} by Famous Artist: ${artist}`}</span>
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
