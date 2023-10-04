import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavourite,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
      onSubmitComment={onSubmitComment}
      onToggleFavourite={onToggleFavourite}
      
    />
  );
}
