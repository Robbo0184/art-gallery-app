import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";
export const StyledLi = styled.li`
  list-style: none;
`;
export default function ArtPieces({
  onFavourite,
  pieces,
  favourites
}) {
  return (
    <ul style={{ margin: "0 0 164px 0" }}>
      {pieces.map((piece) => {
        console.log("Logpiece", piece);
        const isFavourite = favourites.includes(piece.slug)
        return (
          <StyledLi key={piece.slug}>
            <ArtPiecePreview
              piece={piece}
              isFavourite={isFavourite}
              onFavourite={() => onFavourite(piece, isFavourite)}
             
            />
          </StyledLi>
        );
      })}
    </ul>
  );
}
