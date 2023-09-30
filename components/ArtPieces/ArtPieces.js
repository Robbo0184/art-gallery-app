import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import styled from "styled-components";
export const StyledLi = styled.li`
  list-style: none;
`;
export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <StyledLi key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </StyledLi>
        );
      })}
    </ul>
  );
}
