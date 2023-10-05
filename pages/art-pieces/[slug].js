import { ArtPieceDetails } from "@/components/ArtPiece/ArtPieceDetails";
import CommentForm from "@/components/CommentForm/CommentForm";
import Comments from "@/components/Comments/Comments";
import { useRouter } from "next/router";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";


export default function ArtPieceDetailsPage({

  pieces,
  onFavourite,
  favourites

}) {
  const { query } = useRouter();

  const [comments, setComments] = useLocalStorageState('comments', {
    defaultValue: [],
  })


  const commentsForPiece = comments.find(obj => obj.piece_id === query.slug)
  const piece = pieces.find((piece) => piece.slug === query.slug);
  const isFavourite = favourites.includes(piece.slug);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const comment = data.comment;

    if (commentsForPiece) {
      commentsForPiece.comments = [
        ...commentsForPiece.comments,
        { id: uid(), text: comment, date: new Date().toLocaleString() },
      ];
      const index = comments.findIndex(
        (comment) => comment.piece_id === piece.slug
      );
      comments[index] = commentsForPiece;
      setComments(comments);
    } else {
      setComments([
        ...comments,
        { piece_id: piece.slug, comments: [{ id: uid(), text: comment, date: new Date().toLocaleString() }] },
      ]);
    }
    event.currentTarget.reset();
  };

  return (
    <>
    <ArtPieceDetails
      onFavourite={onFavourite}
      piece={piece}
      isFavourite={isFavourite}
    />
    <CommentForm onSubmit={handleSubmit} />
    {commentsForPiece && <Comments comments={commentsForPiece} />}
    </>
  );
}
