import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";
export const StyledLi = styled.li`
  list-style: none;
`;
export default function ArtPieces({
  onSubmitComment,
  pieces,
  onToggleFavourite,
}) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <StyledLi key={piece.slug}>
            <ArtPiecePreview
              color={piece.colors.map((color) => color)}
              onSubmitComment={onSubmitComment}
              isFavourite={piece.isFavourite}
              onToggleFavourite={onToggleFavourite}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
            />
          </StyledLi>
        );
      })}
    </ul>
  );
}
