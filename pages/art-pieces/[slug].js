import { ArtPieceDetails } from "@/components/ArtPiece/ArtPieceDetails";
// import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  onSubmitComment,
  pieces,
  onToggleFavourite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);
  const isFavourite = artPiecesInfo.includes(piece.slug);

  return (
    <ArtPieceDetails
      slug={slug}
      onSubmitComment={onSubmitComment}
      onToggleFavourite={onToggleFavourite}
      name={piece.name}
      image={piece.imageSource}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      isFavourite={isFavourite}
      artPiecesInfo={artPiecesInfo}
      colors={piece.colors}
    />
  );
}
