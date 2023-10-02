import Link from "next/link";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const StyledArtPiece = styled.div`
  width: 80%;
  background-color: gainsboro;
  height: 350px;
  display: relative;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
`;

export default function ArtPiecePreview({ slug, image, title, artist, isFavourite, onToggleFavourite }) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <StyledArtPiece>
          {title ? <h2>{title}</h2> : null}
          <img
            width={200}
            height={200}
            src={image}
            alt={`artpiece is called ${title}`}
          />
          <p>{artist}</p>

          <FavouriteButton
            isFavourite={isFavourite}
            onToggleFavourite={onToggleFavourite}
          />

        </StyledArtPiece>
      </Link>
    </>
  );
}
