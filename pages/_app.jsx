import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";

// import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState();

  // const [favourites, setFavourites] = useLocalStorageState("favourites", {
  //   defaultValue: [],
  // });
  const favouritedPieces = artPiecesInfo?.filter((piece) => piece.isFavourite);
  console.log("fav pieces", favouritedPieces);

  useEffect(() => {
    if (pieces) setArtPiecesInfo(pieces);
  }, [pieces]);

  function handleToggleFavourite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const piece = artPiecesInfo.find((piece) => piece.slug === slug);
      if (piece) {
        //art piece is in the state- toggle isFavourite
        return artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavourite: !piece.isFavourite }
            : piece
        );
      }
    });
  }

  if (!artPiecesInfo) return;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onToggleFavourite={handleToggleFavourite}
        pieces={artPiecesInfo}
        favouritedPieces={favouritedPieces}
      />
      <Layout />
    </>
  );
}

// function handleAddFavourites(title) {
//   setFavourites([
//     {
//       slug: pieces.slug,
//       title: pieces.title,
//       isFavourite: true,
//     },
//     ...favourites,
//   ]);
// }
