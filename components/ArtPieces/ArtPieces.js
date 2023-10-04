import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";
export const StyledLi = styled.li`
  list-style: none;
`;
export default function ArtPieces({
  onSubmitComment,
  pieces,
  artPiecesInfo,
  onToggleFavourite,
}) {
  return (
    <ul style={{ margin: "0 0 164px 0" }}>
      {pieces.map((piece) => {
        const storedPiece = artPiecesInfo.find((obj) => {
          return obj.piece_id === piece.slug;
        });
        return (
          <StyledLi key={piece.slug}>
            <ArtPiecePreview
              colors={piece.colors.map((color) => color)}
              onSubmitComment={onSubmitComment}
              isFavourite={storedPiece?.isFavourite}
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
