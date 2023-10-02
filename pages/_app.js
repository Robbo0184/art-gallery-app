import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([])
 

  if (!pieces) return;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
 

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} artPiecesInfo={artPiecesInfo} />
      <Layout />
    </>
  );
}
