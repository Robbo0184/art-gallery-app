import React, { useState } from "react";

export default function CommentForm({ slug, onSubmitComment }) {
  const [commentText, setCommentText] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitComment(slug, commentText); 
    
    setCommentText("");
  };

  return (
    <form
      onSubmit={handleSubmit}>
      <label>Add comment:</label>
      <input
        name="formInput"
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)} 
      />
      <button>Send</button>
    </form>
  );
}
