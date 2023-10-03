import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
const StyledLayout = styled.div`
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
`;

export default function Layout() {
  return (
    <StyledLayout>
      <Navigation />
    </StyledLayout>
  );
}
