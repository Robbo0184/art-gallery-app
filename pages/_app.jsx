import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
// import { useImmerLocalStorageState } from "@/lib/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  // const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
  //   "art-pieces-info",
  //   { defaultValue: [] }
  // );

  const [artPiecesInfo, setArtPiecesInfo] = useState();
  console.log(pieces);
  const favouritedPieces = artPiecesInfo?.filter((piece) => piece.isFavourite);

  function handleSubmitComment(slug, commentText) {
    if (!commentText.trim()) {
      console.log(
        "Comment text is empty or contains only whitespace. Comment not submitted."
      );
      return;
    }
    console.log("Submitting comment:", slug, commentText);
    setArtPiecesInfo((artPiecesInfo) => {
      const updatedArtPieces = artPiecesInfo.map((piece) => {
        if (piece.slug === slug) {
          const updatedComments = [
            ...(piece.comments || []),
            {
              text: commentText,
              date: new Date().toLocaleString(),
            },
          ];
          return { ...piece, comments: updatedComments };
        }
        return piece;
      });
      return updatedArtPieces;
    });
  }

  useEffect(() => {
    if (pieces) setArtPiecesInfo(pieces);
  }, [pieces]);

  function handleToggleFavourite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const piece = artPiecesInfo.find((piece) => piece.slug === slug);
      if (piece) {
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
      <h1>ART GALLERY</h1>
      <Component
        {...pageProps}
        onToggleFavourite={handleToggleFavourite}
        pieces={artPiecesInfo}
        favouritedPieces={favouritedPieces}
        onSubmitComment={handleSubmitComment}
      />
      <Layout />
    </>
  );
}
