import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
// import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import { uid } from "uid";

// import { useImmerLocalStorageState } from "@/lib/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  const { query } = useRouter();

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );


  if (!pieces) return;

 



  const favouritedPieces = pieces?.filter((piece, index) => {
    if (artPiecesInfo[index]?.piece_id === piece.slug) {
      return piece;
    }
  });

  const commentsForPiece = artPiecesInfo.find(
    (obj) => obj.piece_id === query.slug
  );
  const piece = pieces.find((piece) => piece.slug === query.slug);

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const comment = data.formInput;

    if (commentsForPiece?.comments?.length > 0) {
      commentsForPiece.comments = [
        ...commentsForPiece.comments,
        { id: uid(), text: comment, date: new Date().toLocaleString() },
      ];
      const index = artPiecesInfo.findIndex(
        (comment) => comment.piece_id === piece.slug
      );
      artPiecesInfo[index] = commentsForPiece;
      setArtPiecesInfo(artPiecesInfo);
    } else {
      console.log("hello");
      setArtPiecesInfo([
        ...artPiecesInfo,
        {
          piece_id: piece.slug,
          comments: [
            { id: uid(), text: comment, date: new Date().toLocaleString() },
          ],
        },
      ]);
    }
    event.currentTarget.reset();
  };

  /*
  function handleSubmitComment(slug, commentText) {
    console.log("slug", slug);
    console.log("commentText", commentText);
    if (!commentText.trim()) {
      console.log(
        "Comment text is empty or contains only whitespace. Comment not submitted."
      );
      return;
    }
    setArtPiecesInfo((artPiecesInfo) => {
      console.log("artPiecesInfo", artPiecesInfo);
      const updatedArtPieces = artPiecesInfo.map((piece) => {
        if (piece.slug === slug) {
          const updatedComments = [
            ...(piece.comments || []),
            {
              text: commentText,
              date: new Date().toLocaleString(),
            },
          ];
          console.log("piece", piece);
          console.log("updatedComments", updatedComments);
          return { ...piece, comments: updatedComments };
        }
        return piece;
      });
      console.log("updatedArtPieces", updatedArtPieces);
      return updatedArtPieces;
    });
  }
  */

  // useEffect(() => {
  //   if (pieces) setArtPiecesInfo(pieces);
  // }, [pieces]);

  function handleToggleFavourite(slug) {
    setArtPiecesInfo((draft) => {
      console.log(draft);
      const piece = draft.find((piece) => piece.piece_id === slug);
      if (piece) {
        return draft.map((piece) =>
          piece.piece_id === slug
            ? { ...piece, isFavourite: !piece.isFavourite }
            : piece
        );
      } else {
        return [...artPiecesInfo, { piece_id: slug, isFavourite: true }];
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
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        favouritedPieces={favouritedPieces}
        onSubmitComment={handleSubmitComment}
      />
      <Layout />
    </>
  );
}
