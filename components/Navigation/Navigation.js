import Link from "next/link";
// import styled from "styled-components";

// const StyledLink = styled.Link`
//   background-color: none;
//   text-decoration: none;
//   &:active {
//     color: red;
//   }
// `;

export default function Navigation() {
  return (
    <>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Art Pieces</Link>
      <Link href="/favourites">Favourites</Link>
    </>
  );
}
