import ArtPieces from "@/components/ArtPieces/ArtPieces";
export default function ArtPiecesPage({ pieces, onToggleFavourite }) {
  return <ArtPieces pieces={pieces} onToggleFavourite={onToggleFavourite} />;
}
