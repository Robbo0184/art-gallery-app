import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  function handleToggleFavourite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        //art piece is in the state- toggle isFavourite
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavourite: !info.isFavorite } : info
        );
      }
    });
    return [...artPiecesInfo, { slug, isfFavourite: true }];
  }

  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([])
 

  if (!pieces) return;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
 

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        onToggleFavourite={handleToggleFavourite}
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
      />
  <Layout />
    </>
  );
}
