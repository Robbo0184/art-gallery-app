import FavouriteButton from "../FavouriteButton/FavouriteButton";
import CommentForm from "../CommentForm/CommentForm";
import styled from "styled-components";
import Link from "next/link";
const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;
export function ArtPieceDetails({
  isFavourite,
  onToggleFavourite,
  slug,
  image,
  name,
  artist,
  year,
  onSubmitComment,
  genre,
}) {
  return (
    <StyledFormDiv>
      <img width={500} height={500} src={image} alt="artpiece" />
      <span>{`${name} by : ${artist}`}</span>
      <p>{`Year:${year}`}</p>
      <p>{`Genre: ${genre}`}</p>
      <CommentForm onSubmitComment={onSubmitComment} />
      <div className="section--comment">
        <br></br>
        <FavouriteButton
          slug={slug}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </div>
    </StyledFormDiv>
  );
}
