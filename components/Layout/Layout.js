import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
const PageLayout = styled.div`
margin: 0 0 120px 0;
padding: 0 32px; 
`


export default function Layout({ children }) {
  return (
    <PageLayout>
      {children}
        <Navigation />
    </PageLayout>
  );
}
