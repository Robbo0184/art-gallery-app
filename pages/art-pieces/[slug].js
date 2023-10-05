import { ArtPieceDetails } from "@/components/ArtPiece/ArtPieceDetails";
// import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({

  pieces,
  onFavourite,
  favourites

}) {
  const { query } = useRouter();


  const piece = pieces.find((piece) => piece.slug === query.slug);
  const isFavourite = favourites.includes(piece.slug);

  return (
    <ArtPieceDetails


      onFavourite={onFavourite}
      piece={piece}
      isFavourite={isFavourite}
    />
  );
}
