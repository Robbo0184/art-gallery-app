import { ArtPieceDetails } from "@/components/ArtPiece/ArtPieceDetails";
// import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  onSubmitComment,
  pieces,
  onToggleFavourite,
  comments
}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log("Logging pieces", pieces)
  console.log("Logging comments", comments);
  const piece = pieces.find((piece) => piece.slug === slug);
  const favourites = [];
  const isFavourite = favourites.includes(piece.slug);
  
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
      comments={piece.comments}
    />
  );
}
