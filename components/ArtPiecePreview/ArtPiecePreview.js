import Link from "next/link";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const StyledArtPiece = styled.div`
  width: 60%;
  background-color: #f2f0f0;
  height: 450px;
  display: relative;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
`;

export default function ArtPiecePreview({
  piece,
  isFavourite,
  onFavourite
}) {
  return (

    <StyledArtPiece>
      <Link href={`/art-pieces/${piece.slug}`}>
        <h3>{piece.name}</h3>
        <img
          width={250}
          height={250}
          src={piece.imageSource}
          alt={`artpiece is called ${piece.name}`}
        />
        <p>{piece.artist}</p>
      </Link>
      <FavouriteButton


        isFavourite={isFavourite}
        onFavourite={onFavourite}
      />
    </StyledArtPiece>

  );
}
