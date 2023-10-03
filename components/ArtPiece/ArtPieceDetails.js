import React from "react";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

export function ArtPieceDetails({
  isFavourite,
  onToggleFavourite,
  slug,
  image,
  name,
  artist,
  year,
  comments, 
  onSubmitComment,
  genre,
}) {
  return (
    <div>
      {year} {genre}
      <img width={400} height={400} src={image} alt="artpiece" />
      <span>{`Famous Painting ${name} by Famous Artist: ${artist}`}</span>
      <div className="section--comments">
        <h2>Comments</h2>
        <Comments comments={comments} />
      </div>
      <div className="section--comment">
        <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
        <FavouriteButton
          slug={slug}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </div>
    </div>
  );
}
