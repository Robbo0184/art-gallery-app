import Link from "next/link";
import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  background-color: #dbff33;
  font-family: tahoma;
  font-size: 1rem;
  left: 0;
`;

export default function Navigation() {
  return (
    <Footer>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Art Pieces</Link>
      <Link href="/favourites">Favourites</Link>
    </Footer>
  );
}
