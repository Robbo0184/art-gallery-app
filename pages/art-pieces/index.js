import ArtPieces from "@/components/ArtPieces/ArtPieces";
export default function ArtPiecesPage({
  pieces,
  onToggleFavourite,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      onSubmitComment={onSubmitComment}
      onToggleFavourite={onToggleFavourite}
    />
  );
}
