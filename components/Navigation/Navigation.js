import styled from "styled-components";

const StyledLink = styled.a`
  background-color: none;
  text-decoration: none;
  &:active {
    color: red;
  }
`;

export default function Navigation() {
  return (
    <>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      <StyledLink href="/">Favourites</StyledLink>
    </>
  );
}
