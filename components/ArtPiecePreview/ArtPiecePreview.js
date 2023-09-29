export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img width={200} height={200} src={image} alt="artpiece" />
      {title ? <h2>{title}</h2> : null}
      <span>{artist}</span>
    </div>
  );
}
